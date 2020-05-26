import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Login: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14,10L8,5v3H1v4h7v3L14,10z M17,17H9v2h8c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H9v2h8V17z" />
  </Svg>
);

export default Login;
