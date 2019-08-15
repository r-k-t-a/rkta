import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const FolderVideo = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.405,2.799C18.293,2.359,17.749,2,17.195,2H2.805c-0.555,0-1.099,0.359-1.21,0.799L1.394,4h17.211L18.405,2.799z M19.412,5H0.587C0.245,5-0.022,5.294,0.01,5.635l0.923,11.669C0.971,17.698,1.303,18,1.699,18H18.3c0.397,0,0.728-0.302,0.766-0.696l0.923-11.669C20.022,5.294,19.754,5,19.412,5z M8,14V9l4.383,2.5L8,14z" />
  </Svg>
);

export default FolderVideo;
