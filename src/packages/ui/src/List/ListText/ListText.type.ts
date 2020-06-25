import { ReactNode } from 'react';
import { AddonProps } from '../../Addon/Addon.type';

export type ListTextProps = Omit<AddonProps, 'label'> & {
  label: ReactNode;
  description?: ReactNode;
  reverse?: boolean;
};
