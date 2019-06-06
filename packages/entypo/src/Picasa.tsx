import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Picasa = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M5.808,1.823C2.719,3.411,0.8,6.544,0.8,10.021c0,0.633,0.08,1.275,0.221,1.918L8.97,4.7C8.122,3.929,5.894,1.901,5.808,1.823z M13.793,1.626C12.593,1.081,11.317,0.8,9.999,0.8c-0.934,0-1.855,0.156-2.749,0.441l6.543,5.951V1.626z M15.192,2.438v10.617h3.485c0.343-0.982,0.522-2.004,0.522-3.035C19.2,6.987,17.677,4.148,15.192,2.438z M1.463,13.429c0.674,1.693,1.857,3.15,3.368,4.184v-7.25l-2.045,1.861C2.088,12.858,1.506,13.39,1.463,13.429z M6.23,18.425c0.935,0.422,1.913,0.682,2.92,0.775h1.689c3.019-0.281,5.727-2.068,7.199-4.744H6.23V18.425z" />
  </Svg>
);

export default Picasa;
