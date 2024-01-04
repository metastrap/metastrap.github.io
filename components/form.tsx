'use client';

import {
  UseFormReturn, useForm,
} from 'react-hook-form';
import { useState, useEffect } from 'react';
import JSZip from 'jszip';
import Metastrap, { enums } from '@metastrap/core';

import NextConfig from 'config/next';
import { IGroup, TElement } from 'types/index';
import format from 'formatters';

const CURR_FRAMEWORK = 'next';

let form: UseFormReturn<IGroup>;

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(data: IGroup) {
    if (zip) {
      const ms = new Metastrap(
        zip,
        enums.EFrameworks.next,
        format(data),
      );
      await ms.run();
      ms.downloadZip();
    }
  }

  form = useForm({
    defaultValues: NextConfig,
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Loop registerKey="" element={NextConfig} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Loop({ element, registerKey }: {
  // eslint-disable-next-line react/require-default-props
  registerKey: string | undefined,
  element: TElement
}) {
  const { type, id } = element;
  switch (type) {
    case 'group':
      // eslint-disable-next-line no-case-declarations
      const registerPrefix = (registerKey ? `${registerKey}.elements` : 'elements');
      return (
        <>
          {
            element.elements.map((elem, index) => (
              <Loop
                registerKey={`${registerPrefix}.${index}`}
                key={element.id}
                element={elem}
              />
            ))
          }
        </>
      );
    case 'checkbox':
      return (
        <>
          <input
            id={id}
            disabled={!element.active}
            type="checkbox"
            key={id}
            {...form.register(`${registerKey}.value` as keyof IGroup)}
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
                {...form.register(`${registerKey}.value` as keyof IGroup)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </>
      );
    case 'text':
      return (
        <input
          type="text"
          key={id}
          className="block mb-2"
          {...form.register(`${registerKey}.value` as keyof IGroup)}
        />
      );
  }
  // if (registerKey !== undefined) {
  // }
}
