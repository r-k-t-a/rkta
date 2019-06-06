import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const VCard = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19,3H1C0.447,3,0,3.447,0,4v12c0,0.552,0.447,1,1,1h18c0.553,0,1-0.448,1-1V4C20,3.448,19.553,3,19,3z M13,7h4v1h-4V7z M11,14.803c-0.129-0.102-0.293-0.201-0.529-0.303c-1.18-0.508-2.961-1.26-2.961-2.176c0-0.551,0.359-0.371,0.518-1.379c0.066-0.418,0.385-0.007,0.445-0.961c0-0.38-0.174-0.475-0.174-0.475s0.088-0.562,0.123-0.996c0.036-0.453-0.221-1.8-1.277-2.097C6.959,6.228,6.834,6.305,7.403,6.004C6.159,5.945,5.869,6.596,5.207,7.075C4.643,7.495,4.49,8.16,4.518,8.514C4.555,8.947,4.643,9.51,4.643,9.51S4.468,9.604,4.468,9.984c0.061,0.954,0.38,0.543,0.445,0.961c0.158,1.008,0.519,0.828,0.519,1.379c0,0.916-1.781,1.668-2.961,2.176C2.268,14.588,2.122,14.673,2,14.76V5h9V14.803z M18,11h-5v-1h5V11z" />
  </Svg>
);

export default VCard;
