import React from 'react';
import Link from 'next/link';
import { TButtonProps } from './types';

// eslint-disable-next-line import/prefer-default-export
export function Button({
  children,
  className = '',
  styleType = 'filled',
  type,
  ...rest
}: TButtonProps) {
  const typeOverride = (type || 'button') as React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  let styleTypeClassName;
  switch (styleType) {
    case 'outline':
      styleTypeClassName = 'border border-gray-300 text-gray-300';
      break;
    case 'filled':
    default:
      styleTypeClassName = 'bg-primary';
      break;
  }
  const finalClassName = `text-base rounded-lg px-4 py-2 ${styleTypeClassName} ${className}`;

  return (
    rest.href
      ? <Link className={finalClassName} {...rest} href={rest.href}>{children}</Link>
      : (
        <button
          className={finalClassName}
          // eslint-disable-next-line react/button-has-type
          type={typeOverride}
          {...rest}
        >
          {children}
        </button>
      )
  );
}
