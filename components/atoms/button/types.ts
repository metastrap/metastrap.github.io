import React, { ReactNode } from 'react';

type TButtonStyleType = 'filled' | 'outline';

export interface IButtonCommonProps {
  children: ReactNode | ReactNode[];
  className: string;
  styleType?: TButtonStyleType;
}

export interface ILinkProps extends IButtonCommonProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: 'noopener noreferrer' | 'noreferrer' | 'noopener';
}

export interface IButtonOverrideProps extends IButtonCommonProps {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}

export type TButtonProps = (ILinkProps | IButtonOverrideProps) & Record<string, unknown>;
