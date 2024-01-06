'use client';

import {
  UseFormReturn, useForm,
} from 'react-hook-form';
import { useState, useEffect } from 'react';
import JSZip from 'jszip';
import Metastrap, { enums } from '@metastrap/core';

import NextConfig from 'config/next';
import { IForm } from 'types/index';
import format from 'formatters';
import { TextInput } from './input';
import { Button } from './button';
import Loop from './loop';

const CURR_FRAMEWORK = 'next';

let form: UseFormReturn<IForm>;

export default function FormMain() {
  const [zip, setZip] = useState<JSZip | null>(null);

  useEffect(() => {
    fetch(`${global.location.origin}/zip/${CURR_FRAMEWORK}.zip`)
      .then(async (res) => {
        if (res.ok) {
          setZip(
            await JSZip.loadAsync(await res.arrayBuffer()),
          );
          return;
        }
        throw new Error('Network response was not ok.');
      });
  }, []);

  async function onSubmit(data: IForm) {
    const { downloadFileName, config } = data;
    if (zip) {
      const ms = new Metastrap(
        zip,
        enums.EFrameworks.next,
        {
          downloadFileName,
          features: format(config),
        },
      );
      await ms.run();
      ms.downloadZip();
    }
  }

  form = useForm({
    defaultValues: {
      downloadFileName: 'my-next-project',
      config: NextConfig,
    },
  });

  return (
    <form
      className="flex flex-col"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="my-8 flex-grow-0 flex-shrink-0">
        <TextInput
          register={form.register}
          name="downloadFileName"
          placeholder="Project Name"
        />
        <Button
          className="mx-3"
        >
          Submit
        </Button>
      </div>
      <div className="columns-1 lg:columns-2 2xl:columns-3 gap-8 px-2 flex-grow">
        <Loop form={form} registerKey="config" element={NextConfig} />
      </div>
    </form>
  );
}
