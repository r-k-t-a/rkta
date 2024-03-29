import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Unread: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17,3c-1.104,0-2,0.895-2,2c0,1.105,0.896,2,2,2s2-0.895,2-2C19,3.895,18.104,3,17,3z M12.5,4h-11C1.224,4,1,4.224,1,4.5v1C1,5.776,1.224,6,1.5,6h11C12.776,6,13,5.776,13,5.5v-1C13,4.224,12.776,4,12.5,4z M12.5,9h-11C1.224,9,1,9.224,1,9.5v1C1,10.776,1.224,11,1.5,11h11c0.276,0,0.5-0.224,0.5-0.5v-1C13,9.224,12.776,9,12.5,9z M12.5,14h-11C1.224,14,1,14.224,1,14.5v1C1,15.776,1.224,16,1.5,16h11c0.276,0,0.5-0.224,0.5-0.5v-1C13,14.224,12.776,14,12.5,14z"
    />
  </Svg>
);

export default Unread;
