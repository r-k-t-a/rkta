import { HtmlHTMLAttributes } from 'react';
import { Color } from '../Provider/theme';

type CheckableElement = HtmlHTMLAttributes<HTMLInputElement>;

export type Props = {
  color?: Color;
  checked?: boolean;
  children?: never;
  defaultChecked?: boolean;
  type?: never;
} & CheckableElement;
