import { ReactNode } from 'react';
import { Props as Addon } from '../../Addon/Addon.type';

export interface Props extends Addon {
  label: ReactNode;
  description?: ReactNode;
  reverse?: boolean;
}
