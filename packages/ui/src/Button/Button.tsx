import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom/Atom';
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
  const nextProps = useStyles(
    { normal: true, button: true, ...rest },
    'Button',
    'Paper',
    'Addon',
    'Text',
  );

  const [rippleProps, buttonProps] = useRipple(nextProps);
  return (
    <Atom element="button" {...nextProps} {...buttonProps}>
      {children}
      {!noRipple && <Ripple {...rippleProps} />}
      {rest.busy && (
        <Atom element="span" css={spinnerCss}>
          <Spinner color={rest.color} {...spinnerProps} />
        </Atom>
      )}
    </Atom>
  );
};

Button.defaultProps = {
  busy: false,
  color: 'text',
  tabIndex: 0,
};

export default Button;
