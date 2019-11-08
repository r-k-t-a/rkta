import React, { ReactElement } from 'react';

import Svg from '../Svg';
import { defaultIconSize } from './constants';

const TriangleRight = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15,10l-9,5V5L15,10z" />
  </Svg>
);

export default TriangleRight;
