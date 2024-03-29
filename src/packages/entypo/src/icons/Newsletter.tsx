import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Newsletter: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18,3H2C1.4472656,3,1,3.4472656,1,4v12c0,0.5517578,0.4472656,1,1,1h16c0.5527344,0,1-0.4482422,1-1V4C19,3.4481812,18.5527344,3,18,3z M4,10h6v1H4V10z M12,14H4v-1h8V14z M17,8h-3V5h3V8z" />
  </Svg>
);

export default Newsletter;
