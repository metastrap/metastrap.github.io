'use client';

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import JSZip from 'jszip';
import Metastrap, { enums } from '@metastrap/core';
import type { types } from '@metastrap/core';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<types.INextOptions>();
  const [zip, setZip] = useState<JSZip | null>(null);

  useEffect(() => {
    fetch(`${window.location.origin}/zip/metastrap.zip`)
      .then(async res => {
        if (res.ok) {
          setZip(
            await res.blob() as unknown as JSZip
          );
          return;
        }
        throw new Error('Network response was not ok.');
      });
  }, []);

  function onSubmit(data: types.INextOptions) {
    if (zip) {
      const ms = new Metastrap(
        zip,
        enums.EFrameworks.next,
        data,
      );
      ms.downloadZip();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" defaultValue="nextjs-project" {...register('downloadFileName')} />
      <input type="checkbox" {...register('features.withTailwindcss')} />
      <button type="submit">Submit</button>
    </form>
  );
}
