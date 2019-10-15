import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const ArrowBoldUp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,2.5l7.5,7.5H14v7H6v-7H2.5L10,2.5z" />
  </Svg>
);

export default ArrowBoldUp;
