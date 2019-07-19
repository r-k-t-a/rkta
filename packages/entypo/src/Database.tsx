import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Database = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16.726,12.641c-0.843,1.363-3.535,2.361-6.726,2.361c-3.191,0-5.883-0.998-6.727-2.361C3.095,12.351,3,12.506,3,12.648c0,0.144,0,2.002,0,2.002C3,16.59,6.134,18.6,10,18.6s7-2.01,7-3.949c0,0,0-1.858,0-2.002C17,12.506,16.904,12.351,16.726,12.641z M16.737,7.525c-0.83,1.205-3.532,2.09-6.737,2.09c-3.205,0-5.908-0.885-6.738-2.09C3.091,7.277,3,7.412,3,7.523c0,0.113,0,2.357,0,2.357c0,1.762,3.134,3.189,7,3.189s7-1.428,7-3.189c0,0,0-2.244,0-2.357C17,7.412,16.908,7.277,16.737,7.525z M10,1C6.134,1,3,2.18,3,3.633v1.26c0,1.541,3.134,2.791,7,2.791s7-1.25,7-2.791v-1.26C17,2.18,13.866,1,10,1z" />
  </Svg>
);

export default Database;