import { ReactNode, ReactType } from 'react';

export type Props = {
  children: ReactNode[];
  horizontal?: boolean;
  defaultIndex?: number;
  loop?: boolean;
  validTypes?: ReactType[];
  vertical?: boolean;
};
