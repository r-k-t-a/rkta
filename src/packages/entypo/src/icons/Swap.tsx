import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Swap: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14,5H4V3L0,6.5L4,10V8h10V5z M20,13.5L16,10v2H6v3h10v2L20,13.5z" />
  </Svg>
);

export default Swap;
