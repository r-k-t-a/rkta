import { ReactNode, ReactType } from 'react';

export interface Props {
  children: ReactNode[];
  horizontal?: boolean;
  defaultIndex?: number;
  loop?: boolean;
  validTypes?: ReactType[];
  vertical?: boolean;
}
