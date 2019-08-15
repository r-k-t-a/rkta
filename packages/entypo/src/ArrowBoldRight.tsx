import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrowBoldRight = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.5,10L10,17.5V14H3V6h7V2.5L17.5,10z" />
  </Svg>
);

export default ArrowBoldRight;
