import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Box: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.399,2H1.6C1.268,2,1,2.267,1,2.6V5h18V2.6C19,2.267,18.73,2,18.399,2z M2,16.6c0,0.77,0.629,1.4,1.399,1.4h13.2c0.77,0,1.4-0.631,1.4-1.4V6H2V16.6z M7,8h6v2H7V8z" />
  </Svg>
);

export default Box;
