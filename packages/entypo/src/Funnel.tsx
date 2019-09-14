import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Funnel = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,1C5.092,1,2,2.512,2,4.001v2c0,0.918,6,6,6,6v6c-0.001,0.684,1,1,2,1s2.001-0.316,2-1v-6c0,0,6-5.082,6-6v-2C18,2.512,14.908,1,10,1z M10,6.123C6.409,6.122,3.862,4.79,3.862,4.292C3.86,3.797,6.41,2.461,10,2.463c3.59-0.002,6.14,1.334,6.138,1.828C16.138,4.79,13.591,6.122,10,6.123z" />
  </Svg>
);

export default Funnel;
