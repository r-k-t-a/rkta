/** @jsx jsx */
import { SFC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import { AddonProps } from './Addon.defs';

const Addon: SFC<AddonProps> = ({ children, ...rest }: AddonProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const [nextProps, Element] = useStyles({ element: 'span', ...rest }, 'Addon', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

export default Addon;
