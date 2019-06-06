import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const ArrowLongDown = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,19.25L4.5,14H8V1h4v13h3.5L10,19.25z" />
  </Svg>
);

export default ArrowLongDown;
