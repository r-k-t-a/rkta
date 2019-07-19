import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Cloud = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M20,11.32c0,2.584-2.144,4.68-4.787,4.68H3.617C1.619,16,0,14.416,0,12.463c0-1.951,1.619-3.535,3.617-3.535c0.146,0,0.288,0.012,0.429,0.027C4.009,8.709,3.989,8.457,3.989,8.199C3.989,5.328,6.37,3,9.309,3c2.407,0,4.439,1.562,5.096,3.707c0.263-0.043,0.532-0.066,0.809-0.066C17.856,6.641,20,8.734,20,11.32z" />
  </Svg>
);

export default Cloud;