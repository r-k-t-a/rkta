import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const DotsThreeHorizontal: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,7.8,10.001,7.8z M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2C4.216,12.2,5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S18.216,7.8,17.001,7.8z" />
  </Svg>
);

export default DotsThreeHorizontal;
