import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tumblr = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.6,18.196c-0.777,0.371-1.48,0.631-2.109,0.781c-0.63,0.148-1.311,0.223-2.043,0.223c-0.831,0-1.566-0.107-2.205-0.318c-0.639-0.213-1.183-0.516-1.635-0.908c-0.451-0.395-0.764-0.812-0.938-1.254c-0.174-0.443-0.261-1.086-0.261-1.926V8.339H4.4V5.735c0.714-0.234,1.326-0.57,1.835-1.01c0.51-0.438,0.918-0.965,1.227-1.58C7.77,2.532,7.981,1.749,8.098,0.8h2.585v4.652h4.314v2.887h-4.314v4.719c0,1.066,0.056,1.752,0.168,2.055c0.111,0.303,0.319,0.545,0.622,0.725c0.403,0.244,0.863,0.367,1.381,0.367c0.92,0,1.836-0.303,2.746-0.908V18.196z" />
  </Svg>
);

export default Tumblr;
