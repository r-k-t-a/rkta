import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Wallet: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16,6H3.5V5.5l11-0.88V5.5H16V4c0-1.1-0.891-1.872-1.979-1.717L3.98,3.717C2.891,3.873,2,4.9,2,6v10c0,1.104,0.895,2,2,2h12c1.104,0,2-0.896,2-2V8C18,6.896,17.104,6,16,6z M14.5,13.006c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.328,13.006,14.5,13.006z" />
  </Svg>
);

export default Wallet;
