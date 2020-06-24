import { ImgHTMLAttributes } from 'react';

export type Props = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  srcSet: string;
};
