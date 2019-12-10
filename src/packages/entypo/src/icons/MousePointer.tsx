import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

const MousePointer = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.8601685,11.9953299l2.5251465,6.0802317L11.1703491,19l-2.5252075-6.050354L5,16.6248779V1.1005249l10.9461327,10.8882742L10.8601685,11.9953299z" />
  </Svg>
);

export default MousePointer;
