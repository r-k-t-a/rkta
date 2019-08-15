import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Share = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15,13.442c-0.633,0-1.204,0.246-1.637,0.642l-5.938-3.463C7.471,10.433,7.5,10.237,7.5,10.037S7.471,9.642,7.425,9.454L13.3,6.025C13.746,6.442,14.342,6.7,15,6.7c1.379,0,2.5-1.121,2.5-2.5S16.379,1.7,15,1.7s-2.5,1.121-2.5,2.5c0,0.2,0.029,0.396,0.075,0.583L6.7,8.212C6.254,7.796,5.658,7.537,5,7.537c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5c0.658,0,1.254-0.258,1.7-0.675l5.938,3.463c-0.042,0.175-0.067,0.358-0.067,0.546c0,1.342,1.087,2.429,2.429,2.429s2.429-1.088,2.429-2.429S16.342,13.442,15,13.442z" />
  </Svg>
);

export default Share;
