import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ReplyAll: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M7.225,5.767V3.086L0,9.542l7.225,6.691v-2.777L3,9.542L7.225,5.767z M12.225,6.953V3.086L5,9.542l7.225,6.691v-4.357c3.292,0,5.291,0.422,7.775,4.81C20,16.685,19.632,6.953,12.225,6.953z" />
  </Svg>
);

export default ReplyAll;
