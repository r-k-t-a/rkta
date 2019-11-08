import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const ProgressEmpty = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18,5H2C0.9,5,0,5.9,0,7v6c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C20,5.9,19.1,5,18,5z M18,13H2V7h16V13z" />
  </Svg>
);

export default ProgressEmpty;
