import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Bookmark: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14,2v17l-4-4l-4,4V2c0-0.553,0.585-1.02,1-1h6C13.689,0.98,14,1.447,14,2z" />
  </Svg>
);

export default Bookmark;
