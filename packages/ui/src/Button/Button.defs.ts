import Addon from '../Addon/Addon.d';
import { Paper } from '../Paper/Paper.defs';
import { SpinnerProps } from '../Spinner/Spinner.defs';

export interface ButtonProps extends Addon, Paper {
  blockLevel?: boolean;
  busy?: boolean;
  composition?: string[];

  noripple?: boolean;
  round?: boolean;
  size?: number | string;
  spinnerProps?: SpinnerProps;
}
