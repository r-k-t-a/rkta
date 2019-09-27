/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';

import { Paper as Props } from './Paper.defs';

const Paper: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

export default Paper;
