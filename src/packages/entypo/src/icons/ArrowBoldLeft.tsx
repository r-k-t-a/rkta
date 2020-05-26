import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ArrowBoldLeft: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,2.5V6h7v8h-7v3.5L2.5,10L10,2.5z" />
  </Svg>
);

export default ArrowBoldLeft;
