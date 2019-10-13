import React, { ReactElement } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from './constants';

const LightBulb = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.186,19.172C7.975,19.682,8.887,20.027,10,20c1.111,0.027,2.025-0.318,2.814-0.828L12.797,17H7.203L7.186,19.172z M12.697,16c0-4.357,4.63-5.848,4.283-10.188C16.762,3.074,14.907,0.002,10,0.002c-4.907,0-6.762,3.072-6.981,5.811C2.672,10.152,7.303,11.643,7.303,16H12.697z M5,6c0.207-2.598,2.113-4,5-4c2.886,0,4.654,1.371,4.861,3.969c0.113,1.424-0.705,2.373-1.809,3.926C12.238,11.041,11.449,12.238,11,14H9c-0.449-1.762-1.238-2.959-2.053-4.106C5.844,8.342,4.886,7.424,5,6z"
    />
  </Svg>
);

export default LightBulb;
