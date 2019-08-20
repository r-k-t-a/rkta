import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Swap = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14,5H4V3L0,6.5L4,10V8h10V5z M20,13.5L16,10v2H6v3h10v2L20,13.5z" />
  </Svg>
);

export default Swap;
