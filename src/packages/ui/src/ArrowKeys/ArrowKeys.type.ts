import { ReactNode, ReactType } from 'react';

export type ArrowKeysProps = {
  children: ReactNode[];
  horizontal?: boolean;
  defaultIndex?: number;
  loop?: boolean;
  validTypes?: ReactType[];
  vertical?: boolean;
};
