import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const FlatBrush = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M1.844,14.889c0.498,0.376,1.594-1.178,1.942-0.915c0.348,0.263-0.82,1.762-0.528,1.982c0.292,0.22,1.513-1.239,1.852-0.984c0.338,0.255-0.803,1.774-0.437,2.051C5.04,17.3,6.235,15.821,6.525,16.04c0.29,0.219-0.773,1.797-0.437,2.05c0.336,0.254,1.481-1.263,1.76-1.052c0.28,0.211-0.844,1.743-0.346,2.119c0.498,0.375,5.37-8.964,5.37-8.964L8.996,7.254C8.996,7.254,1.346,14.514,1.844,14.889z M13.023,0.831L9.661,5.987l4.121,3.109l4.396-4.246C17.651,3.347,14.738,1.007,13.023,0.831z" />
  </Svg>
);

export default FlatBrush;
