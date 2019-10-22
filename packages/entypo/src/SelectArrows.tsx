import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const SelectArrows = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,1L5,8h10L10,1z M10,19l5-7H5L10,19z" />
  </Svg>
);

export default SelectArrows;
