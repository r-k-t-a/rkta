import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Warning = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19.511,17.98L10.604,1.348C10.48,1.133,10.25,1,10,1C9.749,1,9.519,1.133,9.396,1.348L0.49,17.98c-0.121,0.211-0.119,0.471,0.005,0.68C0.62,18.871,0.847,19,1.093,19h17.814c0.245,0,0.474-0.129,0.598-0.34C19.629,18.451,19.631,18.191,19.511,17.98z M11,17H9v-2h2V17z M11,13.5H9V7h2V13.5z" />
  </Svg>
);

export default Warning;
