import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Flickr: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M5,14c-2.188,0-3.96-1.789-3.96-4c0-2.211,1.772-4,3.96-4c2.187,0,3.96,1.789,3.96,4C8.96,12.211,7.187,14,5,14z" />
    <path d="M15,14c-2.188,0-3.96-1.789-3.96-4c0-2.211,1.772-4,3.96-4c2.187,0,3.96,1.789,3.96,4C18.96,12.211,17.187,14,15,14z" />
  </Svg>
);

export default Flickr;
