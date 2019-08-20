import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Sweden = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18,4H9v5h10V5C19,4.447,18.553,4,18,4z M1,15c0,0.553,0.248,1,0.8,1H7v-5H1V15z M9,16h9c0.553,0,1-0.447,1-1v-4H9V16z M1,5v4h6V4H1.8C1.248,4,1,4.447,1,5z" />
  </Svg>
);

export default Sweden;
