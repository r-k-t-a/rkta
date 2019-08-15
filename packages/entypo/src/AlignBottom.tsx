import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlignBottom = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M13,11h-2V3H9v8H7l3,3L13,11z M17.4,15H2.6C2.048,15,2,15.447,2,16c0,0.553,0.048,1,0.6,1H17.4c0.552,0,0.6-0.447,0.6-1C18,15.447,17.952,15,17.4,15z" />
  </Svg>
);

export default AlignBottom;
