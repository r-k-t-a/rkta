import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Rainbow = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,5C4.4771729,5,0,9.4771118,0,15h1.5c0-4.694458,3.8056641-8.5,8.5-8.5s8.5,3.805542,8.5,8.5H20C20,9.4771118,15.5228271,5,10,5z M10,11c-2.2092285,0-4,1.7908325-4,4h1.5c0-1.3807373,1.1192627-2.5,2.5-2.5s2.5,1.1192627,2.5,2.5H14C14,12.7908325,12.2092285,11,10,11z M10,8c-3.8659668,0-7,3.1339722-7,7h1.5c0-3.0375977,2.4624023-5.5,5.5-5.5s5.5,2.4624023,5.5,5.5H17C17,11.1339722,13.8659668,8,10,8z" />
  </Svg>
);

export default Rainbow;
