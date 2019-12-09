import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const AlignRight = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M11,7v2H3v2h8v2l3-3L11,7z M15,2.6V17.4c0,0.551,0.448,0.6,1,0.6c0.553,0,1-0.049,1-0.6V2.6C17,2.047,16.553,2,16,2C15.448,2,15,2.047,15,2.6z" />
  </Svg>
);

export default AlignRight;
