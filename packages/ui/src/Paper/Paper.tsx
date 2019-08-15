import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';

import { PaperProps } from './Paper.defs';

const Paper: SFC<PaperProps> = (props: PaperProps): ReactElement => {
  const nextProps = useStyles(props, 'Text', 'Paper');
  return <Atom element="div" {...nextProps} />;
};

export default Paper;
