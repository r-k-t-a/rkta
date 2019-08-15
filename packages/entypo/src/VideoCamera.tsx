import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const VideoCamera = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.5,10c0,1.380249-1.119751,2.5-2.5,2.5c-1.3810425,0-2.5-1.119751-2.5-2.5S6.6189575,7.5,8,7.5C9.380249,7.5,10.5,8.619751,10.5,10z M16,4v12c0,1.0996094-0.9003906,2-2,2H2c-1.0996094,0-2-0.9003906-2-2V4c0-1.0996094,0.9003906-2,2-2h12C15.0996094,2,16,2.9003906,16,4z M12.5,10c0-2.4855347-2.0153809-4.5-4.5-4.5c-2.4855347,0-4.5,2.0144653-4.5,4.5s2.0144653,4.5,4.5,4.5C10.4846191,14.5,12.5,12.4855347,12.5,10z M19.2151489,5.0856323L17,6.5623779v7l2.2151489,1.4768066C19.5506592,15.2628174,20,15.0223389,20,14.6191406V5.5056763C20,5.102478,19.5506592,4.8619385,19.2151489,5.0856323z" />
  </Svg>
);

export default VideoCamera;
