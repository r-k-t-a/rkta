import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Login = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14,10L8,5v3H1v4h7v3L14,10z M17,17H9v2h8c1.1,0,2-0.9,2-2V3c0-1.1-0.9-2-2-2H9v2h8V17z" />
  </Svg>
);

export default Login;
