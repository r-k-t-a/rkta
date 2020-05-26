import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const BackInTime: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M11,1.799c-4.445,0-8.061,3.562-8.169,7.996V10H0.459l3.594,3.894L7.547,10H4.875V9.795C4.982,6.492,7.683,3.85,11,3.85c3.386,0,6.131,2.754,6.131,6.15c0,3.396-2.745,6.15-6.131,6.15c-1.357,0-2.611-0.445-3.627-1.193l-1.406,1.504c1.388,1.088,3.135,1.738,5.033,1.738c4.515,0,8.174-3.67,8.174-8.199S15.515,1.799,11,1.799z M10,5v5c0,0.13,0.027,0.26,0.077,0.382c0.051,0.122,0.124,0.233,0.216,0.325l3.2,3.2c0.283-0.183,0.55-0.389,0.787-0.628L12,11V5H10z" />
  </Svg>
);

export default BackInTime;
