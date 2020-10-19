import { ReactNode, ElementType } from 'react';

export type ArrowKeysProps = {
  children: ReactNode[];
  horizontal?: boolean;
  defaultIndex?: number;
  loop?: boolean;
  validTypes?: ElementType[];
  vertical?: boolean;
};
