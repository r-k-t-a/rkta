import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Shuffle = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.093,6.694h0.92v2.862L20,5.532l-3.988-4.025v2.387h-0.92c-3.694,0-5.776,2.738-7.614,5.152c-1.652,2.172-3.08,4.049-5.386,4.049H0v2.799h2.093c3.694,0,5.776-2.736,7.614-5.152C11.359,8.569,12.787,6.694,15.093,6.694z M5.41,8.458c0.158-0.203,0.316-0.412,0.477-0.623C6.277,7.321,6.691,6.78,7.139,6.239C5.817,5.005,4.224,4.095,2.093,4.095H0v2.799h2.093C3.42,6.894,4.455,7.517,5.41,8.458z M16.012,13.294h-0.92c-1.407,0-2.487-0.701-3.491-1.738c-0.1,0.131-0.201,0.264-0.303,0.397c-0.441,0.58-0.915,1.201-1.439,1.818c1.356,1.324,3,2.324,5.232,2.324h0.92v2.398L20,14.468l-3.988-4.025V13.294z" />
  </Svg>
);

export default Shuffle;
