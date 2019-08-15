import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowLongLeft = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M0.75,10L6,4.5V8h13v4H6v3.5L0.75,10z" />
  </Svg>
);

export default ArrowLongLeft;
