import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const VineWithCircle = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M11.908,6.851c-0.37,0-0.632,0.352-0.632,1.028c0,1.378,0.875,2.171,2.011,2.171c0.201,0,0.427-0.024,0.658-0.077v1.072c-0.378,0.086-0.758,0.121-1.074,0.123c-0.755,1.591-2.113,2.951-2.565,3.208c-0.29,0.163-0.561,0.172-0.878-0.018c-0.559-0.333-2.668-2.065-3.373-7.508h1.53c0.387,3.268,1.325,4.941,2.363,6.196c0.571-0.571,1.121-1.332,1.552-2.193c-1.025-0.522-1.648-1.663-1.648-2.992c0-1.345,0.775-2.362,2.102-2.362c1.287,0,1.991,0.802,1.991,2.181c0,0.514-0.109,1.098-0.314,1.548c-0.957,0.188-1.305-0.423-1.305-0.423c0.07-0.236,0.168-0.635,0.168-0.998C12.495,7.167,12.26,6.851,11.908,6.851z" />
  </Svg>
);

export default VineWithCircle;
