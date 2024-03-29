import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Merge: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.8896484,17.7070312L16.8916016,20C13.7548828,18.6341553,11.3964844,16.8476562,10,14.7250977C8.6035156,16.8476562,6.2451172,18.6341553,3.1083984,20l-0.9980469-2.2929688C5.1396484,16.3886719,8.5498047,14.1015625,8.5498047,10V7H5.5L10,0l4.5,7h-3.0498047v3C11.4501953,14.1015625,14.8603516,16.3886719,17.8896484,17.7070312z" />
  </Svg>
);

export default Merge;
