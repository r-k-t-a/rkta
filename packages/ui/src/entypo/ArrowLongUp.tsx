import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const ArrowLongUp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.75L15.5,6H12v13H8V6H4.5L10,0.75z" />
  </Svg>
);

export default ArrowLongUp;
