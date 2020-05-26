import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Print: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M1.501,6h17c0.57,0,0.477-0.608,0.193-0.707C18.409,5.194,15.251,4,14.7,4H14V1H6v3H5.301c-0.55,0-3.709,1.194-3.993,1.293C1.024,5.392,0.931,6,1.501,6z M19,7H1C0.45,7,0,7.45,0,8v5c0,0.551,0.45,1,1,1h2.283l-0.882,5h15.199l-0.883-5H19c0.551,0,1-0.449,1-1V8C20,7.45,19.551,7,19,7z M4.603,17l1.198-7.003H14.2L15.399,17H4.603z" />
  </Svg>
);

export default Print;
