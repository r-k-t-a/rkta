import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Forward = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M12,11.874v4.357l7-6.69l-7-6.572v3.983c-8.775,0-11,9.732-11,9.732C3.484,12.296,7.237,11.874,12,11.874z" />
  </Svg>
);

export default Forward;
