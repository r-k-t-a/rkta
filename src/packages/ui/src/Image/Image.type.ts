import { HtmlHTMLAttributes } from 'react';

export interface Props extends HtmlHTMLAttributes<HTMLImageElement> {
  alt: string;
  srcSet: string;
}
