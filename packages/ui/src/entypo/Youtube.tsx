import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const Youtube = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,2.3C0.172,2.3,0,3.174,0,10s0.172,7.7,10,7.7s10-0.874,10-7.7S19.828,2.3,10,2.3z M13.205,10.334l-4.49,2.096C8.322,12.612,8,12.408,8,11.974V8.026C8,7.593,8.322,7.388,8.715,7.57l4.49,2.096C13.598,9.85,13.598,10.15,13.205,10.334z" />
  </Svg>
);

export default Youtube;
