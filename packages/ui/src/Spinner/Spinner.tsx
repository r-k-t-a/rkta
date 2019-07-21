import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';
import useStyles from '../util/useStyles';

export interface Props extends AtomProps {
  borderWidth?: number | string;
  size?: number | string;
}

const Spinner: SFC<Props> = (props: Props): ReactElement => {
  const nextProps = useStyles('Spinner', props);
  return <Atom {...nextProps} />;
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  size: '24px',
};

export default Spinner;
