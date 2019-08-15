import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowLeft = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M2.5,10L9,3.5V7h8v6H9v3.5L2.5,10z" />
  </Svg>
);

export default ArrowLeft;
