import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const ArrowLeft = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M2.5,10L9,3.5V7h8v6H9v3.5L2.5,10z" />
  </Svg>
);

export default ArrowLeft;
