import { ReactNode, HTMLProps } from 'react';

import { Color } from '../Provider/theme';
import { PaperOwnProps } from '../Paper/Paper.type';
import { Props as InputBase, InputElement } from '../InputBase/InputBase.type';

export interface Props extends InputBase, PaperOwnProps, HTMLProps<InputElement> {
  active?: never;
  append?: ReactNode;
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
