import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const ArrowLongLeft: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M0.75,10L6,4.5V8h13v4H6v3.5L0.75,10z" />
  </Svg>
);

export default ArrowLongLeft;
