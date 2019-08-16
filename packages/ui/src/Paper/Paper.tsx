import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';

import { PaperProps } from './Paper.defs';

const Paper: SFC<PaperProps> = ({ children, ...rest }: PaperProps): ReactElement => {
  const nextProps = useStyles(rest, 'Paper', 'Text');
  return (
    <Atom element="div" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Paper;
