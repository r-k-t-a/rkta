import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const BarGraph = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17,1h-2c-0.552,0-1,0.447-1,1v16.992h4V2C18,1.447,17.553,1,17,1z M11,7H9C8.448,7,8,7.447,8,8v10.992h4V8C12,7.447,11.553,7,11,7z M5,13H3c-0.552,0-1,0.447-1,1v4.992h4V14C6,13.447,5.553,13,5,13z" />
  </Svg>
);

export default BarGraph;
