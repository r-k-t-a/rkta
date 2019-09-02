import { ReactNode } from 'react';

export interface MediaProps {
  children: ReactNode;
  [key: string]: string | ReactNode;
}
