import { ReactNode } from 'react';
import { PaperOwnProps } from '../Paper/Paper.type';
import { Props as InputBase } from '../InputBase/InputBase.type';

export interface Props extends PaperOwnProps, InputBase {
  prepend?: ReactNode;
  main?: boolean;
  size?: never;
}
