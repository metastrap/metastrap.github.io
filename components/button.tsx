import { ReactNode } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Button({
  children, className, ...rest
}: {
  children: ReactNode,
  className?: string,
} & Record<string, unknown>) {
  return (
    <button
      className={`bg-primary text-base rounded-lg px-4 py-2 ${className}`}
      type="submit"
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};
