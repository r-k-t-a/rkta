import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const LabFlask = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.432,15C14.387,9.893,12,8.547,12,6V3h0.5C12.776,3,13,2.776,13,2.5v-1C13,1.224,12.776,1,12.5,1h-5C7.224,1,7,1.224,7,1.5v1C7,2.776,7.224,3,7.5,3H8v3c0,2.547-2.387,3.893-4.432,9C2.917,16.625,1.245,19,10,19S17.083,16.625,16.432,15z M14.815,16.751C14.113,16.961,12.716,17.2,10,17.2s-4.113-0.239-4.815-0.449c-0.249-0.074-0.346-0.363-0.258-0.628c0.22-0.67,0.635-1.828,1.411-3.121c1.896-3.159,3.863,0.497,5.5,0.497c1.637,0,1.188-1.561,1.824-0.497c0.774,1.294,1.191,2.451,1.411,3.121C15.161,16.388,15.064,16.676,14.815,16.751z"
    />
  </Svg>
);

export default LabFlask;