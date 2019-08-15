import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowLongRight = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14,15.5V12H1V8h13V4.5l5.25,5.5L14,15.5z" />
  </Svg>
);

export default ArrowLongRight;
