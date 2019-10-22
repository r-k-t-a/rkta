import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const ArrowLongDown = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,19.25L4.5,14H8V1h4v13h3.5L10,19.25z" />
  </Svg>
);

export default ArrowLongDown;
