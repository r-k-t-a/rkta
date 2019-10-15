import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const ChevronWithCircleUp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.359,7.785c-0.199-0.196-0.52-0.196-0.717,0l-2.864,2.807c-0.199,0.195-0.198,0.514,0,0.71c0.197,0.196,0.518,0.196,0.717,0L10,9l2.506,2.302c0.198,0.196,0.518,0.196,0.718,0c0.197-0.196,0.197-0.515,0-0.71L10.359,7.785z M10,0.4c-5.302,0-9.6,4.298-9.6,9.6c0,5.303,4.298,9.6,9.6,9.6s9.6-4.297,9.6-9.6C19.6,4.698,15.302,0.4,10,0.4z M10,18.354c-4.615,0-8.354-3.74-8.354-8.354c0-4.614,3.739-8.354,8.354-8.354c4.613,0,8.354,3.74,8.354,8.354C18.354,14.614,14.613,18.354,10,18.354z" />
  </Svg>
);

export default ChevronWithCircleUp;
