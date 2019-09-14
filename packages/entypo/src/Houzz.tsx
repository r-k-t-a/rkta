import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Houzz = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M4,10l6,3l-6,3V10z M10,7l6,3V4L10,7z M10,20l6-3v-7l-6,3V20z M10,0L4,3v7l6-3V0z" />
  </Svg>
);

export default Houzz;
