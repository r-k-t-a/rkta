import { ReactNode } from 'react';

import { Color } from '../Provider/theme';
import { PaperOwnProps } from '../Paper/Paper.type';
import { Props as InputBase } from '../InputBase/InputBase.type';

export type Value = string | number | string[] | undefined;

export interface Props extends InputBase, PaperOwnProps {
  active?: never;
  append?: ReactNode;
  children?: (value?: Value, setValue?: (value?: Value) => void) => JSX.Element | ReactNode;
  color?: Color;
  defaultValue?: string;
  disabled?: boolean;
  hasFocus?: never;
  fancy?: boolean;
  main?: boolean;
  prepend?: ReactNode;
  readOnly?: boolean;
  size?: never;
}
