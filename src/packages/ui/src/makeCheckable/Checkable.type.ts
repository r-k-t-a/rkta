import { HtmlHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Color } from '../Provider/theme';

type CheckableElement = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type Props = {
  color?: Color;
  checked?: boolean;
  children?: never;
  defaultChecked?: boolean;
  type?: never;
} & CheckableElement;