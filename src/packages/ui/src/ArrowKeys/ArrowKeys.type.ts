import { ReactElement, ReactType } from 'react';

export interface Props {
  children: ReactElement[];
  horizontal?: boolean;
  defaultIndex?: number;
  loop?: boolean;
  validTypes?: ReactType[];
  vertical?: boolean;
}
