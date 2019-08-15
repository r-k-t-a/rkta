import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Voicemail = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.4,5.801c-2.541,0-4.601,2.059-4.601,4.6c0,0.965,0.298,1.859,0.806,2.6H8.394c0.508-0.74,0.805-1.635,0.805-2.6c0-2.541-2.059-4.6-4.6-4.6c-2.54,0-4.6,2.059-4.6,4.6C0,12.941,2.059,15,4.6,15H15.4c2.54,0,4.6-2.059,4.6-4.6C20,7.859,17.94,5.801,15.4,5.801z M2,10.4c0-1.436,1.164-2.6,2.6-2.6c1.436,0,2.6,1.164,2.6,2.6c0,1.436-1.164,2.6-2.6,2.6C3.164,13,2,11.836,2,10.4z M15.4,13c-1.437,0-2.601-1.164-2.601-2.6c0-1.436,1.164-2.6,2.601-2.6c1.435,0,2.6,1.164,2.6,2.6C18,11.836,16.836,13,15.4,13z" />
  </Svg>
);

export default Voicemail;
