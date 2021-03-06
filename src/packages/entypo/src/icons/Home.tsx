import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Home: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.672,11H17v6c0,0.445-0.194,1-1,1h-4v-6H8v6H4c-0.806,0-1-0.555-1-1v-6H1.328c-0.598,0-0.47-0.324-0.06-0.748L9.292,2.22C9.487,2.018,9.743,1.918,10,1.908c0.257,0.01,0.513,0.109,0.708,0.312l8.023,8.031C19.142,10.676,19.27,11,18.672,11z" />
  </Svg>
);

export default Home;
