import React, { ReactElement } from 'react';

import Svg from '../Svg';
import { defaultIconSize } from './constants';

const ArrowRight = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M11,16.5V13H3V7h8V3.5l6.5,6.5L11,16.5z" />
  </Svg>
);

export default ArrowRight;
