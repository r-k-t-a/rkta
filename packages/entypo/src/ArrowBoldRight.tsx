import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const ArrowBoldRight = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.5,10L10,17.5V14H3V6h7V2.5L17.5,10z" />
  </Svg>
);

export default ArrowBoldRight;
