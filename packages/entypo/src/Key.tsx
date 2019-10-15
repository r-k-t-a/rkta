import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const Key = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.691,4.725c-0.503-2.977-3.22-4.967-6.069-4.441C8.772,0.809,6.366,3.1,6.869,6.079c0.107,0.641,0.408,1.644,0.763,2.365l-5.175,7.723c-0.191,0.285-0.299,0.799-0.242,1.141l0.333,1.971c0.058,0.342,0.372,0.572,0.7,0.514l1.516-0.281c0.328-0.059,0.744-0.348,0.924-0.639l2.047-3.311l0.018-0.022l1.386-0.256l2.39-3.879c0.785,0.139,1.912,0.092,2.578-0.031C16.955,10.848,18.194,7.704,17.691,4.725z M15.166,6.252c-0.784,1.17-1.584,0.346-2.703-0.475c-1.119-0.818-2.135-1.322-1.352-2.492c0.784-1.17,2.326-1.455,3.447-0.635C15.678,3.469,15.949,5.082,15.166,6.252z" />
  </Svg>
);

export default Key;
