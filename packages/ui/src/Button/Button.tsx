import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom/Atom';
import Addon from '../Addon/Addon';
import Paper from '../Paper';
import Spinner from '../Spinner';

import useStyles from '../util/useStyles';
import { ButtonProps } from './Button.defs';
import { spinnerCss } from './Button.styles';

import Ripple from './Ripple';
import useRipple from './Ripple/useRipple';

const Button: SFC<ButtonProps> = ({
  noRipple,
  children,
  spinnerProps,
  ...rest
}: ButtonProps): ReactElement => {
  const nextProps = useStyles('Button', rest);
  const [rippleProps, buttonProps] = useRipple(nextProps);
  return (
    <Addon BaseElement={Paper} element="button" button normal {...nextProps} {...buttonProps}>
      {children}
      {!noRipple && <Ripple {...rippleProps} />}
      {rest.busy && (
        <Atom element="span" css={spinnerCss}>
          <Spinner color={rest.color} {...spinnerProps} />
        </Atom>
      )}
    </Addon>
  );
};

Button.defaultProps = {
  busy: false,
  color: 'text',
  tabIndex: 0,
};

export default Button;
