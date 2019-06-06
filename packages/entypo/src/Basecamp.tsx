import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Basecamp = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,2C5.327,2,0.7,8.481,0.7,14.422C0.7,15.799,5.234,18,10,18s9.3-2.201,9.3-3.578C19.3,8.481,14.673,2,10,2z M10.006,15.615c-5.198,0-6.673-2.068-6.673-2.722c0-1.287,2.13-4.485,2.906-4.485c0.719,0,1.542,1.811,2.314,1.811c1.241,0,2.567-3.954,3.579-3.954s4.601,5.178,4.601,6.749C16.733,13.285,15.649,15.615,10.006,15.615z" />
  </Svg>
);

export default Basecamp;
