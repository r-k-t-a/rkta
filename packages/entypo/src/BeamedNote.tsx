import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BeamedNote = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17,1l-0.002,13c0,1.243-1.301,3-3.748,3C12.007,17,11,16.347,11,15.125c0-1.589,1.445-2.55,3-2.55c0.432,0,0.754,0.059,1,0.123V5.364L8,6.637L8,16H7.998c0,1.243-1.301,3-3.748,3C3.007,19,2,18.347,2,17.125c0-1.589,1.445-2.55,3-2.55c0.432,0,0.754,0.059,1,0.123V3L17,1z" />
  </Svg>
);

export default BeamedNote;
