import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const PieChart = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M11,0.958v9.039C11,10.551,10.551,11,9.997,11H0.958c0.498,4.555,4.355,8.1,9.042,8.1c5.026,0,9.1-4.074,9.1-9.1C19.1,5.312,15.555,1.456,11,0.958z M9,0.958C4.774,1.42,1.42,4.774,0.958,9H9V0.958z" />
  </Svg>
);

export default PieChart;
