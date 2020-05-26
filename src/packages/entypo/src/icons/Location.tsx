import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Location: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19.367,18.102L18,14h-1.5l0.833,4H2.667L3.5,14H2l-1.368,4.102C0.285,19.146,0.9,20,2,20h16C19.1,20,19.715,19.146,19.367,18.102z M15,5c0-2.761-2.238-5-5-5S5,2.239,5,5c0,4.775,5,10,5,10S15,9.775,15,5z M7.3,5.06c0-1.491,1.208-2.699,2.7-2.699s2.7,1.208,2.7,2.699c0,1.492-1.209,2.7-2.7,2.7S7.3,6.551,7.3,5.06z" />
  </Svg>
);

export default Location;
