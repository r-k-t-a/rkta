import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Popup = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16,2H7.979C6.88,2,6,2.88,6,3.98V12c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M16,12H8V4h8V12z M4,10H2v6c0,1.1,0.9,2,2,2h6v-2H4V10z" />
  </Svg>
);

export default Popup;
