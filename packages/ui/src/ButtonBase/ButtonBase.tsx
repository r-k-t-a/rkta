import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import Paper from '../Paper';
import Ripple from '../Ripple';
import Spinner from '../Spinner';
import { Props as PaperProps } from '../Paper/Paper';
import { Props as SpinnerProps } from '../Spinner/Spinner';
import useStyles from '../util/useStyles';

export interface Props extends PaperProps {
  busy?: boolean;
  noRipple?: boolean;
  role?: string; // TODO: взять из @type для html type attribute
  spinnerProps?: SpinnerProps;
  tabIndex?: number;
}

const spinnerCss: {} = {
  alignContent: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  visibility: 'visible !important',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const ButtonBase: SFC<Props> = ({
  children,
  noRipple,
  spinnerProps,
  ...rest
}: Props): ReactElement => {
  const nextProps = useStyles('ButtonBase', rest);
  return (
    <Paper element="button" readOnly={rest.busy} {...nextProps}>
      {children}
      {!noRipple && <Ripple />}
      {rest.busy && (
        <Atom element="span" css={spinnerCss}>
          <Spinner color={rest.color || 'text'} {...spinnerProps} />
        </Atom>
      )}
    </Paper>
  );
};

ButtonBase.defaultProps = {
  busy: false,
  tabIndex: 0,
  role: 'button',
};

export default ButtonBase;
