import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Drink: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.538,2.639C17.932,2.094,18,1,18,1H2c0,0,0.068,1.094,0.462,1.639L9,11v6H7c-2,0-2,2-2,2h10c0,0,0-2-2-2h-2v-6L17.538,2.639z M9.4,6c0-0.885,0.716-1.6,1.6-1.6s1.6,0.715,1.6,1.6c0,0.883-0.716,1.6-1.6,1.6S9.4,6.883,9.4,6z" />
  </Svg>
);

export default Drink;
