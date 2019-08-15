import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Crop = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M6,14V1H4v3H1v2h3v8c0,1.0996094,0.8989258,2,2,2h8v3h2v-3h3v-2H6z M14,13h2V6c0-1.0996094-0.8989258-2-2-2H7v2h7V13z" />
  </Svg>
);

export default Crop;
