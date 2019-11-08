import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const ArrowUp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,2.5L16.5,9H13v8H7V9H3.5L10,2.5z" />
  </Svg>
);

export default ArrowUp;
