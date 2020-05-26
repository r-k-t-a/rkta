import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Gauge: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M8.127,13.6c-0.689,1.197-0.225,2.18,0.732,2.732c0.956,0.553,2.041,0.465,2.732-0.732c0.689-1.195,5.047-11.865,4.668-12.084C15.88,3.297,8.817,12.404,8.127,13.6z M10,6c0.438,0,0.864,0.037,1.281,0.109c0.438-0.549,0.928-1.154,1.405-1.728C11.834,4.135,10.934,4,10,4C4.393,4,0,8.729,0,14.766c0,0.371,0.016,0.742,0.049,1.103c0.049,0.551,0.54,0.955,1.084,0.908c0.551-0.051,0.957-0.535,0.908-1.086C2.014,15.389,2,15.076,2,14.766C2,9.85,5.514,6,10,6z M17.219,7.25C16.94,8,16.645,8.764,16.385,9.424C17.4,10.894,18,12.738,18,14.766c0,0.316-0.015,0.635-0.043,0.943c-0.05,0.551,0.355,1.037,0.905,1.088c0.03,0.002,0.061,0.004,0.092,0.004c0.511,0,0.948-0.391,0.995-0.91C19.982,15.521,20,15.143,20,14.766C20,11.812,18.947,9.176,17.219,7.25z" />
  </Svg>
);

export default Gauge;
