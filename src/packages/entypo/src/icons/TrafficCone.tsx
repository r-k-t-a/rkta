import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const TrafficCone: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,12.078c2.39,0,4.392-0.812,4.513-1.873c-0.356-0.996-0.744-2.084-1.125-3.152C13.124,7.814,11.663,8.354,10,8.354S6.876,7.814,6.612,7.053c-0.381,1.068-0.769,2.156-1.124,3.152C5.609,11.266,7.61,12.078,10,12.078z M10,5.373c1.124,0,2.167-0.348,2.473-0.889c-0.421-1.182-0.782-2.197-1.011-2.836C11.31,1.221,10.621,1,10,1S8.69,1.221,8.538,1.648c-0.228,0.639-0.59,1.654-1.011,2.836C7.833,5.025,8.877,5.373,10,5.373z M18.78,13.066l-3.755-1.514l0.433,1.207c-0.022,1.279-2.504,2.299-5.458,2.299c-2.953,0-5.437-1.019-5.458-2.299l0.433-1.207L1.22,13.066c-1.053,0.424-1.098,1.209-0.098,1.744l7.062,3.787c0.998,0.535,2.633,0.535,3.632,0l7.063-3.787C19.878,14.275,19.833,13.49,18.78,13.066z" />
  </Svg>
);

export default TrafficCone;
