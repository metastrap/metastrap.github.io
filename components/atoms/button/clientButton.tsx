'use client';

import { useState } from 'react';
import { IButtonOverrideProps } from './types';

// eslint-disable-next-line import/prefer-default-export
export function FabButton({
  children, onClick, className = '', ...rest
}: IButtonOverrideProps & Record<string, unknown>) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <button
      className={`bg-primary text-base rounded-full flex items-center justify-center p-4 aspect-square ${active ? 'active' : ''} ${className}`}
      {...rest}
      type="submit"
      onClick={() => {
        onClick?.();
        setActive(!active);
      }}
    >
      {children}
    </button>
  );
}
