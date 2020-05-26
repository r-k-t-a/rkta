import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const TimeSlot: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4C4.698,0.4,0.4,4.698,0.4,10C0.4,15.302,4.698,19.6,10,19.6c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10,0.4z M10,17.599c-4.197,0-7.6-3.402-7.6-7.6c0-4.197,3.402-7.6,7.6-7.6h0V10l6.792-3.396C17.305,7.627,17.6,8.777,17.6,10C17.6,14.197,14.197,17.599,10,17.599z" />
  </Svg>
);

export default TimeSlot;
