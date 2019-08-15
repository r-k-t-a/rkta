import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const List = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M14.4,9H8.6C8.048,9,8,9.447,8,10s0.048,1,0.6,1H14.4c0.552,0,0.6-0.447,0.6-1S14.952,9,14.4,9z M16.4,14H8.6C8.048,14,8,14.447,8,15s0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1S16.952,14,16.4,14z M8.6,6H16.4C16.952,6,17,5.553,17,5s-0.048-1-0.6-1H8.6C8.048,4,8,4.447,8,5S8.048,6,8.6,6z M5.4,9H3.6C3.048,9,3,9.447,3,10s0.048,1,0.6,1H5.4C5.952,11,6,10.553,6,10S5.952,9,5.4,9z M5.4,14H3.6C3.048,14,3,14.447,3,15s0.048,1,0.6,1H5.4C5.952,16,6,15.553,6,15S5.952,14,5.4,14z M5.4,4H3.6C3.048,4,3,4.447,3,5s0.048,1,0.6,1H5.4C5.952,6,6,5.553,6,5S5.952,4,5.4,4z" />
  </Svg>
);

export default List;
