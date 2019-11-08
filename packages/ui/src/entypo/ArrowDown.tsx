import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const ArrowDown = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,17.5L3.5,11H7V3h6v8h3.5L10,17.5z" />
  </Svg>
);

export default ArrowDown;
