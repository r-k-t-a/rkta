import React, { SFC, ReactElement } from 'react';

import Text from '../Text';
import useStyles from '../util/useStyles';

import { PaperProps } from './Paper.defs';

const Paper: SFC<PaperProps> = (props: PaperProps): ReactElement => {
  const nextProps = useStyles('Paper', props);
  return <Text element="div" {...nextProps} />;
};

export default Paper;
