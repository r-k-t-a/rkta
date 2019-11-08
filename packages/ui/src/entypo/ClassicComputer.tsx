import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const ClassicComputer = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16,0H4C2.9,0,2,0.899,2,2v15c0,0.552,0.447,1,1,1v2h14v-2c0.553,0,1-0.448,1-1V2C18,0.899,17.101,0,16,0z M14,15h-4v-1h4V15z M15,11H5V3h10V11z" />
  </Svg>
);

export default ClassicComputer;
