import { ImgHTMLAttributes } from 'react';

export interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  srcSet: string;
}
