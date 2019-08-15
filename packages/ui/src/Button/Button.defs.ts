import { AddonProps } from '../Addon/Addon.defs';
import { PaperProps } from '../Paper/Paper.defs';
import { SpinnerProps } from '../Spinner/Spinner.defs';

export interface ButtonProps extends AddonProps, PaperProps {
  blockLevel?: boolean;
  busy?: boolean;

  noripple?: boolean;
  outline?: number | string;
  round?: boolean;
  size?: number | string;
  spinnerProps?: SpinnerProps;
}
