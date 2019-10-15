import { ReactNode } from 'react';

import { Color } from '../Provider/theme/theme.type';
import { PaperOwnProps } from '../Paper/Paper.type';
import { Props as InputBase } from './InputBase/InputBase.type';

export interface Props extends PaperOwnProps, InputBase {
  active: never;
  append?: ReactNode;
  color?: Color;
  hasFocus: never;
  fancy?: boolean;
  prepend?: ReactNode;
  size: never;
}
