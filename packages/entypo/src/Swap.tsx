import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Swap = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14,5H4V3L0,6.5L4,10V8h10V5z M20,13.5L16,10v2H6v3h10v2L20,13.5z" />
  </Svg>
);

export default Swap;
