import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const ArrowWithCircleUp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.303,0-9.601,4.298-9.601,9.6c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10,0.4z M9.999,17.6c-4.197,0-7.6-3.402-7.6-7.6s3.402-7.6,7.6-7.6S17.6,5.803,17.6,10S14.196,17.6,9.999,17.6z M10,5.5l4.5,4.5H12v4H8v-4H5.5L10,5.5z" />
  </Svg>
);

export default ArrowWithCircleUp;