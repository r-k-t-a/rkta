import { Props as Addon } from '../Addon/Addon.type';
import { Props as Paper } from '../Paper/Paper.type';
import { Props as Spinner } from '../Spinner/Spinner.type';

export interface Props extends Addon, Paper {
  blockLevel?: boolean;
  busy?: boolean;
  composition?: string[];

  noripple?: boolean;
  round?: boolean;
  size?: number | string;
  spinnerProps?: Spinner;
}
