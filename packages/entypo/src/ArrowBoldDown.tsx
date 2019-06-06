import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const ArrowBoldDown = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M2.5,10H6V3h8v7h3.5L10,17.5L2.5,10z" />
  </Svg>
);

export default ArrowBoldDown;
