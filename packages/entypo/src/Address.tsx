import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Address = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19.799,5.165l-2.375-1.83c-0.135-0.093-0.324-0.176-0.521-0.237C16.705,3.037,16.5,3,16.336,3H9.5l0.801,5h6.035c0.164,0,0.369-0.037,0.566-0.098s0.387-0.145,0.521-0.236l2.375-1.832C19.933,5.743,20,5.622,20,5.5S19.933,5.257,19.799,5.165z M8.5,1h-1C7.224,1,7,1.224,7,1.5V5H3.664c-0.166,0-0.37,0.037-0.567,0.099C2.899,5.159,2.71,5.242,2.576,5.335l-2.375,1.83C0.066,7.256,0,7.378,0,7.5c0,0.121,0.066,0.242,0.201,0.335l2.375,1.832C2.71,9.758,2.899,9.842,3.097,9.902C3.294,9.963,3.498,10,3.664,10H7v8.5C7,18.776,7.224,19,7.5,19h1C8.776,19,9,18.776,9,18.5v-17C9,1.224,8.776,1,8.5,1z" />
  </Svg>
);

export default Address;
