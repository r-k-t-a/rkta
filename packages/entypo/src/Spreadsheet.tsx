import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Spreadsheet = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z M15,8H9v9H8V8H5V7h3V3h1v4h6V8z"
    />
  </Svg>
);

export default Spreadsheet;
