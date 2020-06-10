import { HtmlHTMLAttributes } from 'react';
import { Color } from '../Provider/theme';

export type Props = {
  color?: Color;
  checked?: boolean;
  children?: never;
  defaultChecked?: boolean;
  multiple?: boolean;
  type?: never;
} & HtmlHTMLAttributes<HTMLInputElement>;
