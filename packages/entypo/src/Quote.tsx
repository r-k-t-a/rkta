import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Quote = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M5.315,3.401c-1.61,0-2.916,1.343-2.916,3c0,1.656,1.306,3,2.916,3c2.915,0,0.972,5.799-2.916,5.799v1.4C9.338,16.601,12.057,3.401,5.315,3.401z M13.715,3.401c-1.609,0-2.915,1.343-2.915,3c0,1.656,1.306,3,2.915,3c2.916,0,0.973,5.799-2.915,5.799v1.4C17.738,16.601,20.457,3.401,13.715,3.401z" />
  </Svg>
);

export default Quote;
