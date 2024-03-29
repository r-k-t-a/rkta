import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Resize100: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M4.1,14.1L1,17l2,2l2.9-3.1L8,18v-6H2L4.1,14.1z M19,3l-2-2l-2.9,3.1L12,2v6h6l-2.1-2.1L19,3z" />
  </Svg>
);

export default Resize100;
