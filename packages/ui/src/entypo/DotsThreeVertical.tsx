import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const DotsThreeVertical = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,7.8,10.001,7.8z M10.001,5.2C11.216,5.2,12.2,4.214,12.2,3S11.216,0.8,10.001,0.8C8.786,0.8,7.8,1.785,7.8,3S8.786,5.2,10.001,5.2z M10.001,14.8C8.786,14.8,7.8,15.785,7.8,17s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,14.8,10.001,14.8z" />
  </Svg>
);

export default DotsThreeVertical;
