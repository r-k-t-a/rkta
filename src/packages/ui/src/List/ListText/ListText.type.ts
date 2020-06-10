import { ReactNode } from 'react';
import { AddonProps } from '../../Addon/Addon.type';

export interface Props extends Omit<AddonProps, 'label'> {
  label: ReactNode;
  description?: ReactNode;
  reverse?: boolean;
}
