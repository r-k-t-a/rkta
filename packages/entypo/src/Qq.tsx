import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Qq = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.005,13.018c-0.779-0.547-1.751-0.51-2.304,0.277c-0.553,0.785-4.418,5.633-10.751,3.619c0.239,0.209,0.49,0.406,0.755,0.592c4.153,2.926,9.892,1.928,12.816-2.225C18.076,14.494,17.784,13.567,17.005,13.018z M4.785,12.401C4.381,11.53,2.116,5.758,7.025,1.28c-0.3,0.104-0.597,0.221-0.89,0.357C1.526,3.772-0.481,9.24,1.654,13.85c0.403,0.871,1.353,1.084,2.218,0.684C4.736,14.133,5.188,13.272,4.785,12.401z M10.826,0.823c-0.956-0.086-1.614,0.629-1.7,1.578C9.041,3.35,9.561,4.172,10.517,4.258c0.956,0.086,7.087,1.01,8.51,7.502c0.062-0.311,0.106-0.627,0.136-0.949C19.618,5.75,15.886,1.278,10.826,0.823z M6.891,10.53c-0.264,0.619-0.306,1.213-0.094,1.322c0.146,0.076,0.374-0.098,0.588-0.416C7.47,11.783,7.68,12.098,7.98,12.35c-0.314,0.115-0.52,0.305-0.52,0.519c0,0.354,0.556,0.639,1.241,0.639c0.618,0,1.13-0.232,1.225-0.537c0.025,0,0.123,0,0.147,0c0.095,0.305,0.607,0.537,1.226,0.537c0.686,0,1.241-0.285,1.241-0.639c0-0.215-0.205-0.404-0.52-0.519c0.299-0.252,0.51-0.566,0.594-0.914c0.214,0.318,0.442,0.492,0.589,0.416c0.211-0.109,0.17-0.703-0.095-1.322c-0.207-0.488-0.488-0.848-0.702-0.926C12.41,9.573,12.41,9.541,12.41,9.51c0-0.19-0.052-0.363-0.142-0.504c0.002-0.012,0.002-0.023,0.002-0.033c0-0.088-0.021-0.168-0.056-0.238C12.16,7.467,11.335,6.461,10,6.461c-1.336,0-2.161,1.006-2.215,2.273c-0.035,0.07-0.057,0.15-0.057,0.238c0,0.01,0.001,0.021,0.002,0.033C7.642,9.147,7.589,9.321,7.589,9.51c0,0.031,0.001,0.062,0.004,0.094C7.38,9.682,7.098,10.041,6.891,10.53z" />
  </Svg>
);

export default Qq;
