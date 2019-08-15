import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogOut = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19,10l-6-5v3H6v4h7v3L19,10z M3,3h8V1H3C1.9,1,1,1.9,1,3v14c0,1.1,0.9,2,2,2h8v-2H3V3z" />
  </Svg>
);

export default LogOut;
