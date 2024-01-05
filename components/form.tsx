'use client';

import {
  UseFormReturn, useForm,
} from 'react-hook-form';
import { useState, useEffect, Fragment } from 'react';
import JSZip from 'jszip';
import Metastrap, { enums } from '@metastrap/core';

import NextConfig from 'config/next';
import { ICheckbox, IForm, TElement } from 'types/index';
import format from 'formatters';
import pascalToSpaces from 'utils/pascalToSpaces';
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
    <form
      className=""
      onSubmit={form.handleSubmit(onSubmit)}
    >
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
      <div className="columns-1 lg:columns-2 2xl:columns-3 gap-8 px-2">
        <Loop registerKey="" element={NextConfig} />
      </div>
    </form>
  );
}

function Loop({ element, registerKey, level }: {
  registerKey: string | undefined,
  element: TElement
  level?: number,
}) {
  const { type, id, name } = element;
  const registerPrefix = (registerKey ? `${registerKey}.elements` : 'elements');
  const Wrapper = level ? 'fieldset' : Fragment;
  const fieldsetArgs = level ? { className: 'mb-12' } : {};

  let tagText;
  let description;

  switch (type) {
    case 'group':
      return (
        <Wrapper {...fieldsetArgs}>
          {!!level && <legend className="ml-2">{name || pascalToSpaces(id)}</legend>}
          {
            element.elements.map((elem, index) => (
              <Loop
                level={level || 0 + 1}
                registerKey={`${registerPrefix}.${index}`}
                key={element.id}
                element={elem}
              />
            ))
          }
        </Wrapper>
      );
    case 'checkbox':
      tagText = (element as unknown as ICheckbox).tags
        ?.reduce((acc, tag) => `${acc} ${tag}`, '');
      description = (element as unknown as ICheckbox).description;
      return (
        <div className="py-4 px-6 my-3 border border-gray-500">
          <div className="flex">
            <input
              id={id}
              disabled={!element.active}
              type="checkbox"
              key={id}
              {...form.register(`${registerKey}.value` as keyof IForm)}
            />
            <label className="ml-3" htmlFor={id}>{element.id}</label>
          </div>
          {
            tagText
            && <p className="uppercase text-gray-400 text-xs">{tagText}</p>
          }
          {
            description
            && <p className="capitalize text-sm text-gray-300 mt-3">{description}</p>
          }
        </div>
      );
    case 'radio':
      return (
        <div>
          {element.options.map((option: string) => (
            <Fragment key={option}>
              <input
                type="radio"
                disabled={!element.active}
                id={option}
                value={option}
                {...form.register(`${registerKey}.value` as keyof IForm)}
              />
              <label htmlFor={option}>{option}</label>
            </Fragment>
          ))}
        </div>
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

Loop.defaultProps = {
  level: 0,
};
