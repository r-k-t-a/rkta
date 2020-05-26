import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ArrowBoldRight: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.5,10L10,17.5V14H3V6h7V2.5L17.5,10z" />
  </Svg>
);

export default ArrowBoldRight;
