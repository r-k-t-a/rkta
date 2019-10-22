import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Back = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19,7v6c0,1.103-0.896,2-2,2H3v-3h13V8H5v2L1,6.5L5,3v2h12C18.104,5,19,5.896,19,7z" />
  </Svg>
);

export default Back;
