/** @jsx jsx */
import { ReactElement, SFC } from 'react';
import { jsx } from '@emotion/core';

import useProviderContext from '../Provider/useProviderContext';
import { BageProps } from './Bage.defs';

const Bage: SFC<BageProps> = ({ children, ...rest }: BageProps): ReactElement => {
  const { applyStyles } = useProviderContext();

  const [nextProps, Element] = applyStyles(
    { rounded: true, overline: true, nowrap: true, ...rest },
    'Bage',
    'Paper',
    'Text',
  );

  return <Element {...nextProps}>{children}</Element>;
};

export default Bage;
