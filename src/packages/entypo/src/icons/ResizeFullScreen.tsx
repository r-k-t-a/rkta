import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ResizeFullScreen: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M6.987,10.987l-2.931,3.031L2,11.589V18h6.387l-2.43-2.081l3.03-2.932L6.987,10.987z M11.613,2l2.43,2.081l-3.03,2.932l2,2l2.931-3.031L18,8.411V2H11.613z" />
  </Svg>
);

export default ResizeFullScreen;
