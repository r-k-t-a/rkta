import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Layers = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M9.248,11.601c0.45,0.313,1.05,0.313,1.5,0l9.088-5.281c0.236-0.164,0.21-0.518-0.048-0.646l-9.205-3.537c-0.368-0.183-0.802-0.183-1.17,0L0.208,5.674C-0.05,5.801-0.076,6.156,0.16,6.32L9.248,11.601z M19.788,10.811l-2.486-1.233l-5.725,3.327c-0.469,0.309-1.014,0.471-1.579,0.471s-1.11-0.163-1.579-0.471L2.698,9.576l-2.49,1.234c-0.258,0.128-0.284,0.482-0.048,0.646l9.088,6.309c0.45,0.313,1.05,0.313,1.5,0l9.088-6.309C20.072,11.293,20.046,10.939,19.788,10.811z" />
  </Svg>
);

export default Layers;
