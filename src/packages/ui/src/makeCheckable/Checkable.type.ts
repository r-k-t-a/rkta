import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Color } from '../Provider/theme';

export type CheckableElement = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CheckableProps = {
  color?: Color;
  checked?: boolean;
  children?: never;
  defaultChecked?: boolean;
  type?: never;
} & CheckableElement;
