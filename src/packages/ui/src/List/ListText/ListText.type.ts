import { ReactNode } from 'react';
import { Props as Addon } from '../../Addon/Addon.type';

export interface Props extends Omit<Addon, 'label'> {
  label: ReactNode;
  description?: ReactNode;
  reverse?: boolean;
}
