/* eslint-disable no-use-before-define */
export type TInput = 'checkbox' | 'text' | 'select' | 'number' | 'color' | 'range' | 'url';

export interface ICommon {
  id: string;
  /* optional when same as "id" */
  name?: string;
  /* all the parents in the hierarchy upto root, would be "active: true" */
  active?: boolean;
  value: string | number | boolean;
}

export interface IRef extends ICommon {
  type: 'ref';
  /* reference to another element by path */
  references: string;
}

export interface IRadio extends ICommon {
  type: 'radio';
  options: string[];
  value: string;
}

export interface ICheckbox extends ICommon {
  type: 'radio';
  options: string[];
  value: boolean;
}

export interface IElement extends ICommon {
  type: TInput;
  value: string;
}

export interface IGroup extends ICommon {
  type: 'group';
  elements: TElement[];
}

export type TElement = IElement | IGroup | IRef | IRadio | ICheckbox;

export interface IRoot extends ICommon {
  type: 'group';
  elements: TElement[];
}
