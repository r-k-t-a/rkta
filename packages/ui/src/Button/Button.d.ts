import { AddonProps } from '../Addon/Addon.d';
import { PaperProps } from '../Paper/Paper.d';
import { SpinnerProps } from '../Spinner/Spinner.d';

export interface ButtonProps extends AddonProps, PaperProps {
  blockLevel?: boolean;
  busy?: boolean;

  noripple?: boolean;
  outline?: number | string;
  round?: boolean;
  size?: number | string;
  spinnerProps?: SpinnerProps;
}
