import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Water = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M9.882,9.093c-0.511,4.115-3.121,4.847-3.121,7.708C6.761,18.567,8.244,20,10,20c1.756,0,3.238-1.434,3.238-3.199c0-2.861-2.61-3.593-3.121-7.708C10.101,8.97,9.898,8.97,9.882,9.093z M3.883,0.093C3.372,4.208,0.762,4.939,0.762,7.801C0.762,9.566,2.244,11,4,11c1.756,0,3.238-1.434,3.238-3.199c0-2.861-2.61-3.593-3.121-7.708C4.102-0.03,3.898-0.03,3.883,0.093z M15.883,0.093c-0.511,4.115-3.121,4.847-3.121,7.708C12.762,9.566,14.244,11,16,11c1.756,0,3.238-1.434,3.238-3.199c0-2.861-2.61-3.593-3.121-7.708C16.101-0.03,15.898-0.03,15.883,0.093z" />
  </Svg>
);

export default Water;
