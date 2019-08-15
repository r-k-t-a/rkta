import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Xing = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.703,1h-2.828c-0.223,0-0.553,0.105-0.69,0.381S13.875,2,13.875,2l-5,10l3,6c0,0,0.172,0.344,0.31,0.619S12.652,19,12.875,19h2.828c0.5,0,0.48-0.381,0.355-0.631S15.875,18,15.875,18l-3-6l5-10c0,0,0.059-0.119,0.184-0.369S18.203,1,17.703,1z M6.815,5.381C6.678,5.105,6.348,5,6.125,5H3.297c-0.5,0-0.48,0.381-0.355,0.631S3.125,6,3.125,6l1.25,2.5L2.125,13c0,0-0.059,0.119-0.184,0.369S1.797,14,2.297,14h2.828c0.223,0,0.553-0.106,0.691-0.381C5.953,13.344,6.125,13,6.125,13l2.25-4.5L7.125,6C7.125,6,6.953,5.656,6.815,5.381z" />
  </Svg>
);

export default Xing;
