import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const FolderImages = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.405,2.799C18.293,2.359,17.749,2,17.195,2H2.805c-0.555,0-1.099,0.359-1.21,0.799L1.394,4h17.211L18.405,2.799z M19.412,5H0.587C0.245,5-0.022,5.294,0.01,5.635l0.923,11.669C0.971,17.698,1.303,18,1.699,18H18.3c0.397,0,0.728-0.302,0.766-0.696l0.923-11.669C20.022,5.294,19.754,5,19.412,5z M12.438,8.375c0.518,0,0.938,0.42,0.938,0.938c0,0.518-0.42,0.938-0.938,0.938S11.5,9.83,11.5,9.312C11.5,8.795,11.92,8.375,12.438,8.375z M5.5,14l2.486-5.714l2.827,4.576l2.424-1.204L14.5,14H5.5z" />
  </Svg>
);

export default FolderImages;
