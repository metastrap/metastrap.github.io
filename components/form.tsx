'use client';
import { useForm } from 'react-hook-form';
import React from 'react';
import JSZip from 'jszip';
import dynamic from 'next/dynamic';
import Metastrap, { enums } from '@metastrap/core';

import { Inputs } from 'types';



export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [loading, setLoading] = React.useState(true);
  let zip: JSZip;

  fetch('http://localhost:3000/zip/metastrap.zip').then(async res => {
    if (res.ok) {
      zip = await res.blob() as unknown as JSZip;
      setLoading(false);
      return zip;
    }
    throw new Error('Network response was not ok.');
  });

  function onSubmit(data: Inputs) {
    const ms = new Metastrap(
      zip,
      enums.EFrameworks.next,
      {
        features: {
          withTailwindcss: data.withTailwindcss,
        },
        downloadFileName: 'nextjs-project',
      }
    );
    ms.downloadZip();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" defaultValue="nextjs-project" {...register('downloadFileName')} />
      <input type="checkbox" {...register('withTailwindcss')} />
      <button type="submit">Submit</button>
    </form>
  );
}
