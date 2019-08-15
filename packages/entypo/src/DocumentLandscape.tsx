import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DocumentLandscape = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19,3H1C0.448,3,0,3.447,0,4v12c0,0.553,0.448,1,1,1h18c0.552,0,1-0.447,1-1V4C20,3.447,19.553,3,19,3z M18,15H2V5h16V15z" />
  </Svg>
);

export default DocumentLandscape;
