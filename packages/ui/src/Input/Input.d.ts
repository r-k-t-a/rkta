import { ReactNode } from 'react';

import { Color } from '../Provider/theme/theme.defs';

import { InputBase } from './InputBase/InputBase.d';
import { PaperOwnProps } from '../Paper/Paper.defs';

export interface Input extends PaperOwnProps, InputBase {
  active: never;
  append?: ReactNode;
  color?: Color;
  hasFocus: never;
  fancy?: boolean;
  prepend?: ReactNode;
  size: never;
}
