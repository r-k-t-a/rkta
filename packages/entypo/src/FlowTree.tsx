import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const FlowTree = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18,14.824V12.5c0-1.933-1.567-3.5-3.5-3.5h-2C11.672,9,11,8.328,11,7.5V5.176c0.825-0.38,1.4-1.208,1.4-2.176c0-1.326-1.074-2.4-2.4-2.4S7.6,1.674,7.6,3c0,0.967,0.576,1.796,1.4,2.176V7.5C9,8.328,8.328,9,7.5,9h-2C3.567,9,2,10.567,2,12.5v2.324C1.175,15.204,0.6,16.033,0.6,17c0,1.326,1.074,2.4,2.4,2.4s2.4-1.075,2.4-2.4c0-0.967-0.576-1.796-1.4-2.176V12.5C4,11.672,4.672,11,5.5,11h2c0.539,0,1.044-0.132,1.5-0.35v4.174C8.175,15.204,7.6,16.033,7.6,17c0,1.326,1.074,2.4,2.4,2.4s2.4-1.075,2.4-2.4c0-0.967-0.576-1.796-1.4-2.176V10.65c0.456,0.218,0.961,0.35,1.5,0.35h2c0.828,0,1.5,0.672,1.5,1.5v2.324c-0.825,0.38-1.4,1.208-1.4,2.176c0,1.326,1.074,2.4,2.4,2.4s2.4-1.075,2.4-2.4C19.4,16.033,18.825,15.204,18,14.824z M10,1.615c0.764,0,1.384,0.619,1.384,1.385c0,0.764-0.62,1.385-1.384,1.385C9.235,4.385,8.616,3.764,8.616,3C8.616,2.234,9.235,1.615,10,1.615z M3,18.385c-0.766,0-1.385-0.621-1.385-1.385c0-0.766,0.619-1.385,1.385-1.385c0.764,0,1.384,0.619,1.384,1.385C4.384,17.764,3.764,18.385,3,18.385z M10,18.385c-0.766,0-1.385-0.621-1.385-1.385c0-0.766,0.619-1.385,1.385-1.385c0.764,0,1.384,0.619,1.384,1.385C11.384,17.764,10.764,18.385,10,18.385z M17,18.385c-0.766,0-1.385-0.621-1.385-1.385c0-0.766,0.619-1.385,1.385-1.385c0.764,0,1.384,0.619,1.384,1.385C18.384,17.764,17.764,18.385,17,18.385z" />
  </Svg>
);

export default FlowTree;
