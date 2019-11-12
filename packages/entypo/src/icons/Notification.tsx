import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const Notification = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15,8.38V17H3V5h8.62c-0.073-0.322-0.12-0.655-0.12-1s0.047-0.678,0.12-1H3C1.898,3,1,3.9,1,5v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8.38c-0.322,0.073-0.655,0.12-1,0.12S15.322,8.453,15,8.38z M16,1c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S17.657,1,16,1z" />
  </Svg>
);

export default Notification;
