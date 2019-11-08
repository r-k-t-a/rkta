import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const ArrowBoldDown = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M2.5,10H6V3h8v7h3.5L10,17.5L2.5,10z" />
  </Svg>
);

export default ArrowBoldDown;
