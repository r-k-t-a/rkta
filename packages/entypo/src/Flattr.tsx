import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Flattr = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M5.598,8.541c0-1.637,0.434-2.678,1.889-2.912c0.508-0.1,1.566-0.064,2.239-0.064v2.5c0,0.024,0.003,0.064,0.009,0.084C9.762,8.25,9.854,8.324,9.963,8.324c0.061,0,0.118-0.031,0.178-0.09L16.377,2H12.19H7.548C3.874,2,2,4.115,2,8.066v8.287l3.598-3.602V8.541z M14.4,7.248v4.209c0,1.637-0.434,2.68-1.889,2.912c-0.508,0.1-1.566,0.065-2.238,0.065v-2.5c0-0.022-0.004-0.062-0.009-0.084c-0.028-0.1-0.12-0.174-0.228-0.176c-0.062,0-0.118,0.033-0.179,0.092l-6.235,6.232L7.809,18h4.643C16.125,18,18,15.885,18,11.934V3.647L14.4,7.248z" />
  </Svg>
);

export default Flattr;
