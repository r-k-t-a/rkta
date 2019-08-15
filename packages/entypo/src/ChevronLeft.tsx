import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChevronLeft = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M12.452,4.516c0.446,0.436,0.481,1.043,0,1.576L8.705,10l3.747,3.908c0.481,0.533,0.446,1.141,0,1.574c-0.445,0.436-1.197,0.408-1.615,0c-0.418-0.406-4.502-4.695-4.502-4.695C6.112,10.57,6,10.285,6,10s0.112-0.57,0.335-0.789c0,0,4.084-4.287,4.502-4.695C11.255,4.107,12.007,4.08,12.452,4.516z" />
  </Svg>
);

export default ChevronLeft;
