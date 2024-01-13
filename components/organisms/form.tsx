'use client';

import {
  UseFormReturn, useForm,
} from 'react-hook-form';
import { useState, useEffect, ReactNode } from 'react';
import JSZip from 'jszip';
import Metastrap, { enums } from '@metastrap/core';

import NextConfig from 'config/next';
import { IForm } from 'types/index';
import format from 'formatters';
import { TextInput } from '../atoms/input';
import { Button } from '../atoms/button/button';
import Loop from '../molecules/loop';

const CURR_FRAMEWORK = 'next';

let form: UseFormReturn<IForm>;

export default function FormMain({ children }: {
  children?: ReactNode,
}) {
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
          Download Zip
        </Button>
      </div>
      {children}
      <div className="columns-1 lg:columns-2 2xl:columns-3 gap-8 px-2 flex-grow">
        <Loop level={0} form={form} registerKey="config" element={NextConfig} />
      </div>
    </form>
  );
}

FormMain.defaultProps = {
  children: null,
};
