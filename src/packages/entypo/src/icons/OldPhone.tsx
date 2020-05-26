import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const OldPhone: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.256,12.253c-0.096-0.667-0.611-1.187-1.274-1.342c-2.577-0.604-3.223-2.088-3.332-3.734C12.193,7.092,11.38,7,10,7S7.807,7.092,7.35,7.177c-0.109,1.646-0.755,3.13-3.332,3.734c-0.663,0.156-1.178,0.675-1.274,1.342l-0.497,3.442C2.072,16.907,2.962,18,4.2,18h11.6c1.237,0,2.128-1.093,1.953-2.305L17.256,12.253z M10,15.492c-1.395,0-2.526-1.12-2.526-2.5s1.131-2.5,2.526-2.5s2.526,1.12,2.526,2.5S11.394,15.492,10,15.492z M19.95,6C19.926,4.5,16.108,2.001,10,2C3.891,2.001,0.073,4.5,0.05,6s0.021,3.452,2.535,3.127c2.941-0.381,2.76-1.408,2.76-2.876C5.345,5.227,7.737,4.98,10,4.98s4.654,0.247,4.655,1.271c0,1.468-0.181,2.495,2.76,2.876C19.928,9.452,19.973,7.5,19.95,6z" />
  </Svg>
);

export default OldPhone;
