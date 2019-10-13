import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const LevelUp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19,9v7h-3v-6H6v3L1,8.5L6,4v3h11C18.104,7,19,7.897,19,9z" />
  </Svg>
);

export default LevelUp;
