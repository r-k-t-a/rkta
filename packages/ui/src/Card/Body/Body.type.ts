import { ReactNode } from 'react';
import { Props as TextProps } from '../../Text/Text.type';

export interface Props extends TextProps {
  children: ReactNode;
}
