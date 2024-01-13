import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IForm } from 'types/index';

// eslint-disable-next-line import/prefer-default-export
export function TextInput({
  register, name, className = '', ...rest
}: {
  register: UseFormRegister<IForm>,
  name: string,
  className?: string,
  placeholder?: string,
} & Record<string, unknown>) {
  return (
    <input
      type="text"
      className={`bg-transparent border rounded-lg border-gray-500 focus:border-gray-700 focus:outline-none py-2 px-4 ${className}`}
      {...register(name as keyof IForm)}
      {...rest}
    />
  );
}

TextInput.defaultProps = {
  className: '',
  placeholder: '',
};
