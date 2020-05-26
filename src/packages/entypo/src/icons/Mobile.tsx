import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Mobile: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14.004,0H5.996C4.894,0,4,0.894,4,1.996v16.007C4,19.106,4.894,20,5.996,20h8.007C15.106,20,16,19.106,16,18.004V1.996C16,0.894,15.106,0,14.004,0z M10,19c-0.69,0-1.25-0.447-1.25-1s0.56-1,1.25-1s1.25,0.447,1.25,1S10.69,19,10,19z M14,16H6V2h8V16z" />
  </Svg>
);

export default Mobile;
