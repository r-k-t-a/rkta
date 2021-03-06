import { HTMLProps } from 'react';
import { AddonProps } from '../Addon/Addon.type';
import { PaperProps } from '../Paper/Paper.type';
import { SpinnerProps } from '../Spinner/Spinner.type';

export type ButtonProps = Omit<AddonProps & PaperProps & HTMLProps<HTMLElement>, 'size'> & {
  blockLevel?: boolean;
  busy?: boolean;
  composition?: string[];
  noripple?: boolean;
  round?: boolean;
  size?: number | string;
  spinnerProps?: SpinnerProps;
};
