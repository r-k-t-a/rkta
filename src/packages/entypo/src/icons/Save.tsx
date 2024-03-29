import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Save: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.173,2H4C2.899,2,2,2.9,2,4v12c0,1.1,0.899,2,2,2h12c1.101,0,2-0.9,2-2V5.127L15.173,2z M14,8c0,0.549-0.45,1-1,1H7C6.45,9,6,8.549,6,8V3h8V8z M13,4h-2v4h2V4z" />
  </Svg>
);

export default Save;
