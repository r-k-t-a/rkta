import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ControllerJumpToStart: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14.959,4.571L7.756,9.52c0,0-0.279,0.201-0.279,0.481s0.279,0.479,0.279,0.479l7.203,4.951C15.531,15.811,16,15.53,16,14.805V5.196C16,4.469,15.531,4.188,14.959,4.571z M6,4H5C4.447,4,4,4.048,4,4.6V15.4C4,15.952,4.447,16,5,16h1c0.553,0,1-0.048,1-0.6V4.6C7,4.048,6.553,4,6,4z" />
  </Svg>
);

export default ControllerJumpToStart;
