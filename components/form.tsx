'use client';

import {
  UseFormReturn, useForm,
} from 'react-hook-form';
import { useState, useEffect } from 'react';
import JSZip from 'jszip';
import Metastrap, { enums } from '@metastrap/core';

import NextConfig from 'config/next';
import { IForm, TElement } from 'types/index';
import format from 'formatters';
import { TextInput } from './input';
import { Button } from './button';

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
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="my-8">
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
      <Loop registerKey="" element={NextConfig} />
    </form>
  );
}

function Loop({ element, registerKey }: {
  registerKey: string | undefined,
  element: TElement
}) {
  const { type, id } = element;
  switch (type) {
    case 'group':
      // eslint-disable-next-line no-case-declarations
      const registerPrefix = (registerKey ? `${registerKey}.elements` : 'elements');
      return (
        <fieldset>
          {
            element.elements.map((elem, index) => (
              <Loop
                registerKey={`${registerPrefix}.${index}`}
                key={element.id}
                element={elem}
              />
            ))
          }
        </fieldset>
      );
    case 'checkbox':
      return (
        <>
          <input
            id={id}
            disabled={!element.active}
            type="checkbox"
            key={id}
            {...form.register(`${registerKey}.value` as keyof IForm)}
          />
          <label htmlFor={id}>{element.id}</label>
        </>
      );
    case 'radio':
      return (
        <>
          {element.options.map((option: string) => (
            <div key={option}>
              <input
                type="radio"
                disabled={!element.active}
                id={option}
                value={option}
                {...form.register(`${registerKey}.value` as keyof IForm)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </>
      );
    case 'text':
      return (
        <TextInput
          key={id}
          name={`${registerKey}.value` as keyof IForm}
          register={form.register}
          className="block mb-2"
        />
      );
    // ToDo: implement `ref`
  }
}
