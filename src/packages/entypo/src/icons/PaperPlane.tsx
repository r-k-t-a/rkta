import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const PaperPlane: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.64,2.634C18.296,2.755,1.319,8.738,0.984,8.856c-0.284,0.1-0.347,0.345-0.01,0.479c0.401,0.161,3.796,1.521,3.796,1.521l0,0l2.25,0.901c0,0,10.838-7.958,10.984-8.066c0.148-0.108,0.318,0.095,0.211,0.211c-0.107,0.117-7.871,8.513-7.871,8.513v0.002L9.892,12.92l0.599,0.322l0,0c0,0,4.65,2.504,4.982,2.682c0.291,0.156,0.668,0.027,0.752-0.334c0.099-0.426,2.845-12.261,2.906-12.525C19.21,2.722,18.983,2.513,18.64,2.634z M7,17.162c0,0.246,0.139,0.315,0.331,0.141c0.251-0.229,2.85-2.561,2.85-2.561L7,13.098V17.162z" />
  </Svg>
);

export default PaperPlane;
