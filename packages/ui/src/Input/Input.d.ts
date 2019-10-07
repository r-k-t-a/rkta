import { ReactNode } from 'react';

import { Color } from '../Provider/theme/theme.d';
import { PaperOwnProps } from '../Paper/Paper.d';
import { InputBase } from './InputBase/InputBase.d';

export interface Input extends PaperOwnProps, InputBase {
  active: never;
  append?: ReactNode;
  color?: Color;
  hasFocus: never;
  fancy?: boolean;
  prepend?: ReactNode;
  size: never;
}
