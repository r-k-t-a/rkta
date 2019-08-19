import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useProviderContext from '../Provider/useProviderContext';

import { PaperProps } from './Paper.defs';

const Paper: SFC<PaperProps> = ({ children, ...rest }: PaperProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const nextProps = useStyles(rest, 'Paper', 'Text');
  return (
    <Atom element="div" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Paper;
