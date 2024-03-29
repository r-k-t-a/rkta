import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ThumbsUp: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M13.648,7.362c-0.133-0.355,3.539-3.634,1.398-6.291c-0.501-0.621-2.201,2.975-4.615,4.603C9.099,6.572,6,8.484,6,9.541v6.842C6,17.654,10.914,19,14.648,19C16.017,19,18,10.424,18,9.062C18,7.694,13.779,7.718,13.648,7.362z M5,7.457c-0.658,0-3,0.4-3,3.123v4.848c0,2.721,2.342,3.021,3,3.021c0.657,0-1-0.572-1-2.26V9.816C4,8.048,5.657,7.457,5,7.457z" />
  </Svg>
);

export default ThumbsUp;
