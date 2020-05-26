import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Stumbleupon: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M11.051,8.059l1.365,0.66l2.059-0.66V6.865C14.475,4.402,12.467,2.4,10,2.4S5.525,4.402,5.525,6.865v6.27c0,0.578-0.472,1.049-1.051,1.049c-0.58,0-1.051-0.471-1.051-1.049V10.51H0v2.625C0,15.596,2.007,17.6,4.475,17.6c2.467,0,4.474-2.004,4.474-4.465v-6.27c0-0.578,0.472-1.049,1.052-1.049c0.579,0,1.051,0.471,1.051,1.049V8.059z M16.576,10.51v2.625c0,0.578-0.471,1.049-1.051,1.049c-0.58,0-1.051-0.471-1.051-1.049v-2.678l-2.059,0.658l-1.365-0.658v2.678c0,2.461,2.008,4.465,4.475,4.465S20,15.596,20,13.135V10.51H16.576z" />
  </Svg>
);

export default Stumbleupon;
