import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Typing: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16,4H4C2.899,4,2,4.9,2,6v7c0,1.1,0.899,2,2,2h4l4,3v-3h4c1.1,0,2-0.9,2-2V6C18,4.9,17.1,4,16,4z M6,10.6c-0.607,0-1.1-0.492-1.1-1.1c0-0.608,0.492-1.1,1.1-1.1s1.1,0.492,1.1,1.1C7.1,10.107,6.607,10.6,6,10.6z M10,10.6c-0.607,0-1.1-0.492-1.1-1.1c0-0.608,0.492-1.1,1.1-1.1s1.1,0.492,1.1,1.1C11.1,10.107,10.607,10.6,10,10.6z M14,10.6c-0.607,0-1.1-0.492-1.1-1.1c0-0.608,0.492-1.1,1.1-1.1s1.1,0.492,1.1,1.1C15.1,10.107,14.607,10.6,14,10.6z" />
  </Svg>
);

export default Typing;
