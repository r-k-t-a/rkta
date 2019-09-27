/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import { Addon as Props } from './Addon.defs';

const Addon: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element: 'span', ...rest }, 'Addon', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

export default Addon;
