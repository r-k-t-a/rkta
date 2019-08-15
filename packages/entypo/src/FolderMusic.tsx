import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FolderMusic = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.405,2.799C18.293,2.359,17.749,2,17.195,2H2.805c-0.555,0-1.099,0.359-1.21,0.799L1.394,4h17.211L18.405,2.799z M19.412,5H0.587C0.245,5-0.022,5.294,0.01,5.635l0.923,11.669C0.971,17.698,1.303,18,1.699,18H18.3c0.397,0,0.728-0.302,0.766-0.696l0.923-11.669C20.022,5.294,19.754,5,19.412,5z M11.942,12.521c-0.128,0.265-0.258,0.279-0.202,0c0.146-0.721,0.047-2.269-1.043-2.441v3.294c0,0.674-0.311,1.262-1.136,1.528c-0.802,0.256-1.699-0.011-1.908-0.586c-0.21-0.576,0.261-1.276,1.052-1.564c0.442-0.161,0.954-0.203,1.299-0.07V8h0.694C10.697,9.633,13.516,9.275,11.942,12.521z" />
  </Svg>
);

export default FolderMusic;
