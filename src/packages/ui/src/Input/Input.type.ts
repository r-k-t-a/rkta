import { ReactNode } from 'react';

import { Color } from '../Provider/theme';
import { PaperOwnProps } from '../Paper/Paper.type';
import { InputBaseProps, Value } from '../InputBase/InputBase.type';

type ChildrenArgs = {
  value?: Value;
  setValue(value: Value): void;
};

export type InputProps = {
  active?: never;
  append?: ReactNode;
  children?: (args: ChildrenArgs) => JSX.Element | ReactNode;
  color?: Color;
  disabled?: boolean;
  hasFocus?: never;
  fancy?: boolean;
  main?: boolean;
  prepend?: ReactNode;
  readOnly?: boolean;
  size?: never;
} & InputBaseProps &
  PaperOwnProps;
