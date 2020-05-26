import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const ControllerRecord: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,3c-3.866,0-7,3.133-7,7c0,3.865,3.134,7,7,7s7-3.135,7-7C17,6.133,13.866,3,10,3z" />
  </Svg>
);

export default ControllerRecord;
