import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Menu = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16.4,9H3.6C3.048,9,3,9.447,3,10c0,0.553,0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1C17,9.447,16.952,9,16.4,9z M16.4,13H3.6C3.048,13,3,13.447,3,14c0,0.553,0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1C17,13.447,16.952,13,16.4,13z M3.6,7H16.4C16.952,7,17,6.553,17,6c0-0.553-0.048-1-0.6-1H3.6C3.048,5,3,5.447,3,6C3,6.553,3.048,7,3.6,7z" />
  </Svg>
);

export default Menu;
