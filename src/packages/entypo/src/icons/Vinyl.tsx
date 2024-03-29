import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Vinyl: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M9.999,0.8C4.918,0.8,0.8,4.919,0.8,10.001c0,5.08,4.118,9.199,9.199,9.199c5.081,0,9.2-4.119,9.2-9.199C19.199,4.919,15.08,0.8,9.999,0.8z M10,13.001c-1.657,0-3-1.344-3-3c0-1.656,1.343-3,3-3c1.656,0,3,1.344,3,3C13,11.657,11.656,13.001,10,13.001z" />
  </Svg>
);

export default Vinyl;
