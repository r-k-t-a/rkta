import React, { SFC, ReactElement } from 'react';

import ButtonBase from '../ButtonBase/ButtonBase';
import useStyles from '../util/useStyles';
import { ButtonProps } from './Button.d';

const Button: SFC<ButtonProps> = ({ children, ...rest }: ButtonProps): ReactElement => {
  const nextProps = useStyles('Button', rest);
  return <ButtonBase {...nextProps}>{children}</ButtonBase>;
};

export default Button;
