import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Documents = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19.398,7.415l-7.444-1.996l-1.303-4.861c-0.109-0.406-0.545-0.642-0.973-0.529L0.602,2.461C0.174,2.575-0.084,2.999,0.025,3.405l3.23,12.051c0.109,0.406,0.544,0.643,0.971,0.527l3.613-0.967l-0.492,1.838c-0.109,0.406,0.149,0.83,0.577,0.943l8.11,2.174c0.428,0.115,0.862-0.121,0.972-0.529l2.97-11.084C20.084,7.952,19.826,7.528,19.398,7.415z M1.633,3.631l7.83-2.096l2.898,10.818l-7.83,2.096L1.633,3.631z M15.678,18.463L8.864,16.6L9.4,14.598l3.901-1.047c0.428-0.113,0.688-0.537,0.578-0.943l-1.508-5.627l5.947,1.631L15.678,18.463z" />
  </Svg>
);

export default Documents;
