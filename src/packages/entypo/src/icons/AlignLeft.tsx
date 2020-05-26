import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const AlignLeft: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M6,10l3,3v-2h8V9H9V7L6,10z M4,2C3.447,2,3,2.047,3,2.6V17.4C3,17.951,3.447,18,4,18c0.552,0,1-0.049,1-0.6V2.6C5,2.047,4.552,2,4,2z" />
  </Svg>
);

export default AlignLeft;
