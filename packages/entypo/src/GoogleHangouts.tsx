import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GoogleHangouts = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0C5.25,0,1.4,3.806,1.4,8.5C1.4,13.194,5.25,17,10,17v3c3.368-1.672,8.6-5.305,8.6-11.5C18.6,3.806,14.75,0,10,0z M9,9.741c0,1.328-1.021,2.422-2.32,2.538c-0.123,0.011-0.228-0.088-0.228-0.211v-0.852c0-0.106,0.079-0.194,0.184-0.21C7.167,10.93,7.573,10.519,7.683,10H5.732C5.328,10,5,9.672,5,9.268V6.732C5,6.328,5.328,6,5.732,6h2.536C8.672,6,9,6.328,9,6.732V9.741z M15,9.741c0,1.328-1.021,2.422-2.32,2.538c-0.123,0.011-0.228-0.088-0.228-0.211v-0.852c0-0.106,0.079-0.194,0.184-0.21c0.531-0.077,0.937-0.487,1.047-1.006h-1.951C11.328,10,11,9.672,11,9.268V6.732C11,6.328,11.328,6,11.732,6h2.536C14.672,6,15,6.328,15,6.732V9.741z" />
  </Svg>
);

export default GoogleHangouts;
