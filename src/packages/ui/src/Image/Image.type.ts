import { ImgHTMLAttributes } from 'react';

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
  srcSet: string;
};
