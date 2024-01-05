import { Fragment } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { ICheckbox, IForm, TElement } from 'types/index';
import pascalToSpaces from 'utils/pascalToSpaces';
import { TextInput } from './input';

export default function Loop({
  element, registerKey, level, form,
}: {
  registerKey: string | undefined,
  element: TElement
  level?: number,
  form: UseFormReturn<IForm>
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
                form={form}
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
        <div className="checkbox-wrapper">
          <input
            className="absolute top-0 left-0 w-full h-full opacity-0 z-[1] cursor-pointer disabled:cursor-not-allowed"
            id={id}
            disabled={!element.active}
            type="checkbox"
            key={id}
            {...form.register(`${registerKey}.value` as keyof IForm)}
          />
          <div className={`checkbox-details py-4 px-6 my-3 border border-gray-500 relative ${!element.active && 'disabled'}`}>
            <div className="flex checkbox-shadow">
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
