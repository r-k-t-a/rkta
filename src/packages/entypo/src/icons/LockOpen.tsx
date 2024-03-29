import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const LockOpen: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.8,8H14V5.6C14,2.703,12.665,1,10,1C7.334,1,6,2.703,6,5.6V6h2V5.199C8,3.754,8.797,3,10,3c1.203,0,2,0.754,2,2.199V8H4C3.447,8,3,8.646,3,9.199V17c0,0.549,0.428,1.139,0.951,1.307l1.197,0.387C5.672,18.861,6.55,19,7.1,19H12.9c0.549,0,1.428-0.139,1.951-0.307l1.196-0.387C16.571,18.139,17,17.549,17,17V9.199C17,8.646,16.352,8,15.8,8z" />
  </Svg>
);

export default LockOpen;
