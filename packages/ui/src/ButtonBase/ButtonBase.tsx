import React, { ReactElement, SFC } from 'react';

import Paper from '../Paper';
import Ripple from '../Ripple';
import { Props as PaperProps } from '../Paper/Paper';
import useStyles from '../util/useStyles';

export interface Props extends PaperProps {
  noRipple?: boolean;
  tabIndex?: number;
  role?: string; // TODO: взять из @type для html type attribute
}

const ButtonBase: SFC<Props> = ({ children, noRipple, ...rest }: Props): ReactElement => {
  const nextProps = useStyles('ButtonBase', rest);
  return (
    <Paper element="button" {...nextProps}>
      {children}
      {!noRipple && <Ripple />}
    </Paper>
  );
};

ButtonBase.defaultProps = {
  tabIndex: 0,
  role: 'button',
};

export default ButtonBase;
