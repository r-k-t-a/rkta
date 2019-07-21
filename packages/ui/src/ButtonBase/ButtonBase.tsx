import React, { ReactElement, SFC, useRef } from 'react';

import Atom from '../Atom';
import Paper from '../Paper';
import Ripple from '../Ripple';
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
  atomRef,
  children,
  noRipple,
  spinnerProps,
  ...rest
}: Props): ReactElement => {
  const nextProps = useStyles('ButtonBase', rest);
  const ref = atomRef || useRef(null);
  return (
    <Paper atomRef={ref} element="button" readOnly={rest.busy} {...nextProps}>
      {children}
      {!noRipple && <Ripple />}
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
