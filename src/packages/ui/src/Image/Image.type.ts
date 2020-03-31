import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLImageElement> {
  alt: string;
  srcSet: string;
}
