import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom/Atom';
import Paper from '../Paper';
import Ripple from './Ripple';
import useRipple from './Ripple/useRipple';
import Spinner from '../Spinner';
import { spinnerCss } from './ButtonBase.styles';
import useStyles from '../util/useStyles';
import { ButtonBaseProps } from './ButtonBase.d';

const ButtonBase: SFC<ButtonBaseProps> = ({
  children,
  noRipple,
  spinnerProps,
  ...rest
}: ButtonBaseProps): ReactElement => {
  const nextProps = useStyles('ButtonBase', rest);
  const [rippleProps, buttonProps] = useRipple(rest);
  return (
    <Paper element="button" readOnly={rest.busy} {...nextProps} {...buttonProps}>
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

ButtonBase.defaultProps = {
  busy: false,
  color: 'text',
  tabIndex: 0,
  role: 'button',
};

export default ButtonBase;
