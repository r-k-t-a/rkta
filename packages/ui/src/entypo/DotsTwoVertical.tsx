import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const DotsTwoVertical = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.001,8.2C11.216,8.2,12.2,7.214,12.2,6S11.216,3.8,10.001,3.8C8.786,3.8,7.8,4.785,7.8,6S8.786,8.2,10.001,8.2z M10.001,11.8C8.786,11.8,7.8,12.785,7.8,14s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,11.8,10.001,11.8z" />
  </Svg>
);

export default DotsTwoVertical;
