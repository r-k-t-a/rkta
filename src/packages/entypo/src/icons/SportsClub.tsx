import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const SportsClub: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M6,13.5l4,2.5l4-2.5V5H6V13.5z M4.5,10c0-1.105-0.896-2-2-2s-2,0.895-2,2c0,1.105,0.896,2,2,2S4.5,11.105,4.5,10z M17.5,8c-1.104,0-2,0.895-2,2c0,1.105,0.896,2,2,2s2-0.895,2-2C19.5,8.895,18.604,8,17.5,8z M4.485,6.199C5.74,4.384,7.802,3.3,10,3.3c2.158,0,4.198,1.056,5.456,2.823c0.449,0.629,1.323,0.776,1.952,0.329c0.63-0.448,0.777-1.323,0.329-1.953C15.955,1.995,13.062,0.5,10,0.5c-3.117,0-6.04,1.535-7.817,4.107c-0.439,0.636-0.28,1.508,0.355,1.948C3.175,6.993,4.046,6.834,4.485,6.199z M15.456,13.877C14.198,15.645,12.158,16.7,10,16.7c-2.198,0-4.26-1.084-5.515-2.899c-0.439-0.636-1.311-0.794-1.947-0.356c-0.636,0.44-0.795,1.312-0.355,1.948C3.96,17.965,6.883,19.5,10,19.5c3.062,0,5.955-1.495,7.737-3.999c0.448-0.63,0.301-1.504-0.329-1.953C16.779,13.101,15.905,13.248,15.456,13.877z" />
  </Svg>
);

export default SportsClub;
