import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import Paper from '../Paper';
import Ripple from './Ripple';
import useRipple from './Ripple/useRipple';
import Spinner from '../Spinner';
import { Props as PaperProps } from '../Paper/Paper';
import { Props as SpinnerProps } from '../Spinner/Spinner';
import { spinnerCss } from './ButtonBase.styles';
import useStyles from '../util/useStyles';

export interface Props extends PaperProps {
  busy?: boolean;
  noRipple?: boolean;
  role?: string; // TODO: взять из @type для html type attribute
  spinnerProps?: SpinnerProps;
  tabIndex?: number;
}

const ButtonBase: SFC<Props> = ({
  children,
  noRipple,
  spinnerProps,
  ...rest
}: Props): ReactElement => {
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
