/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';

import { PaperProps } from './Paper.defs';

const Paper: SFC<PaperProps> = ({ children, ...rest }: PaperProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextProps, Element] = useStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

export default Paper;
