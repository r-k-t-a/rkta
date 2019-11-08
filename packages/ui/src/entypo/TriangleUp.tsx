import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const TriangleUp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15,14H5l5-9L15,14z" />
  </Svg>
);

export default TriangleUp;
