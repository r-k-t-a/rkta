import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PowerPlug = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M0,14v1.498C0,15.775,0.225,16,0.502,16h0.997C1.775,16,2,15.775,2,15.498V14c0-0.959,0.801-2.273,2-2.779V9.116C1.684,9.652,0,11.97,0,14z M12.065,4.701L9.535,6.599C9.188,6.859,8.766,7,8.332,7H6.005C5.45,7,5,7.45,5,8.005v3.991C5,12.55,5.45,13,6.005,13h2.327c0.434,0,0.856,0.141,1.203,0.401l2.531,1.898C12.672,15.754,13.41,16,14.168,16H16V4h-1.832C13.41,4,12.672,4.246,12.065,4.701z M17,6v2h3V6H17z M17,14h3v-2h-3V14z" />
  </Svg>
);

export default PowerPlug;
