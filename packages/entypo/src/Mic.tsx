import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Mic = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M16.399,7.643V10.4c0,2.236-1.643,4.629-5.399,4.959V18h2.6c0.22,0,0.4,0.18,0.4,0.4V19.6c0,0.221-0.181,0.4-0.4,0.4h-7.2C6.18,20,6,19.82,6,19.6V18.4C6,18.18,6.18,18,6.399,18H9v-2.641c-3.758-0.33-5.4-2.723-5.4-4.959V7.643c0-0.221,0.18-0.4,0.4-0.4h0.6c0.22,0,0.4,0.18,0.4,0.4V10.4c0,1.336,1.053,3.6,5,3.6c3.946,0,5-2.264,5-3.6V7.643c0-0.221,0.18-0.4,0.399-0.4H16C16.22,7.242,16.399,7.422,16.399,7.643z M10,12c2.346,0,3-0.965,3-1.6V7.242H7V10.4C7,11.035,7.652,12,10,12z M13,1.6C13,0.963,12.346,0,10,0C7.652,0,7,0.963,7,1.6v4.242h6V1.6z" />
  </Svg>
);

export default Mic;