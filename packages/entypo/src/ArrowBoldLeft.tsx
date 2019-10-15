import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const ArrowBoldLeft = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,2.5V6h7v8h-7v3.5L2.5,10L10,2.5z" />
  </Svg>
);

export default ArrowBoldLeft;
