import { PaperProps } from '../Paper/Paper.d';
import { SpinnerProps } from '../Spinner/Spinner.d';

export interface ButtonBaseProps extends PaperProps {
  busy?: boolean;
  noRipple?: boolean;
  role?: string; // TODO: взять из @type для html type attribute
  spinnerProps?: SpinnerProps;
  tabIndex?: number;
}
