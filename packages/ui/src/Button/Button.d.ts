import { ButtonBaseProps } from '../ButtonBase/ButtonBase.d';

export interface ButtonProps extends ButtonBaseProps {
  big?: boolean;
  blockLevel?: boolean;
  fitAll?: boolean;
  fitLeft?: boolean;
  fitRight?: boolean;
  huge?: boolean;
  small?: boolean;
  tiny?: boolean;

  outline?: number | string;
  round?: boolean;
  size?: number | string;
}
