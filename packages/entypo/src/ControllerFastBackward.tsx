import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const ControllerFastBackward = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.959,4.571L10.756,9.52c0,0-0.279,0.201-0.279,0.481s0.279,0.479,0.279,0.479l7.203,4.951C18.531,15.811,19,15.53,19,14.805V5.196C19,4.469,18.531,4.188,17.959,4.571z M8.883,4.571L1.68,9.52c0,0-0.279,0.201-0.279,0.481s0.279,0.479,0.279,0.479l7.203,4.951c0.572,0.381,1.041,0.1,1.041-0.625V5.196C9.924,4.469,9.455,4.188,8.883,4.571z" />
  </Svg>
);

export default ControllerFastBackward;
