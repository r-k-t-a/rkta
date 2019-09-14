import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const RdioWithCircle = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M13.403,9.482c0.022,0.17,0.034,0.342,0.034,0.518c0,2.176-1.742,3.941-3.892,3.941c-2.148,0-3.891-1.766-3.891-3.941c0-2.178,1.742-3.942,3.891-3.942c0.309,0,0.608,0.039,0.896,0.107V8.41C9.987,8.244,9.426,8.268,8.9,8.521c-0.952,0.461-1.435,1.494-1.079,2.311c0.357,0.816,1.418,1.106,2.371,0.645c0.656-0.316,1.234-1.078,1.234-2.035V6.549c0.082,0.045,0.162,0.096,0.24,0.146c0.739,0.465,1.838,1.086,3.121,1.152C15.288,7.873,14.59,9.131,13.403,9.482z" />
  </Svg>
);

export default RdioWithCircle;
