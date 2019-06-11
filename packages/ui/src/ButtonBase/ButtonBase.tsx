import React from 'react';

import Paper from '../Paper';
import Ripple from '../Ripple';
import { Props as PaperProps } from '../Paper/Paper';

export interface Props extends PaperProps {
  noRipple?: boolean;
  tabIndex?: number;
  role?: string; // TODO: взять из @type для html type attribute
}

const ButtonBase = ({ children, noRipple, ...rest }: Props): React.ReactNode => (
  <Paper element="button" {...rest}>
    {children}
    {!noRipple && <Ripple />}
  </Paper>
);

ButtonBase.defaultProps = {
  tabIndex: 0,
  role: 'button',
};

export default ButtonBase;
