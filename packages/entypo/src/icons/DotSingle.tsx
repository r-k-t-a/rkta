import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const DotSingle = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M7.8,10c0,1.215,0.986,2.2,2.201,2.2S12.2,11.214,12.2,10c0-1.215-0.984-2.199-2.199-2.199S7.8,8.785,7.8,10z" />
  </Svg>
);

export default DotSingle;
