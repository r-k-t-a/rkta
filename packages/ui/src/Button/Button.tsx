import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom/Atom';
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
  const nextProps = useStyles({ normal: true, ...rest }, 'Button', 'Addon', 'Text');

  const [rippleProps, buttonProps] = useRipple(nextProps);
  return (
    <Paper element="button" button {...nextProps} {...buttonProps}>
      {children}
      {!noRipple && <Ripple {...rippleProps} />}
      {rest.busy && (
        <Atom element="span" css={spinnerCss}>
          <Spinner color={rest.color} {...spinnerProps} />
        </Atom>
      )}
    </Paper>
  );
};

Button.defaultProps = {
  busy: false,
  color: 'text',
  tabIndex: 0,
};

export default Button;
