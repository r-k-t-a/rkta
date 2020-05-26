import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Forward: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M12,11.874v4.357l7-6.69l-7-6.572v3.983c-8.775,0-11,9.732-11,9.732C3.484,12.296,7.237,11.874,12,11.874z" />
  </Svg>
);

export default Forward;
