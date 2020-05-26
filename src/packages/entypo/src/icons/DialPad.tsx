import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const DialPad: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6,0H4C3.448,0,3,0.448,3,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V1C7,0.448,6.552,0,6,0z M11,0H9C8.448,0,8,0.448,8,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V1C12,0.448,11.552,0,11,0z M16,0h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V1C17,0.448,16.552,0,16,0z M6,5H4C3.448,5,3,5.448,3,6v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V6C7,5.448,6.552,5,6,5z M11,5H9C8.448,5,8,5.448,8,6v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V6C12,5.448,11.552,5,11,5z M16,5h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1V6C17,5.448,16.552,5,16,5z M6,10H4c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C7,10.448,6.552,10,6,10z M11,10H9c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C12,10.448,11.552,10,11,10z M11,16H9c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C12,16.448,11.552,16,11,16z M16,10h-2c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-2C17,10.448,16.552,10,16,10z"
    />
  </Svg>
);

export default DialPad;
