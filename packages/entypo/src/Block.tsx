import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Block = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10,0.4c-5.303,0-9.601,4.298-9.601,9.6c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10,0.4z M2.399,10c0-4.197,3.402-7.6,7.6-7.6c1.829,0,3.506,0.647,4.817,1.723L4.122,14.817C3.046,13.505,2.399,11.829,2.399,10z M9.999,17.599c-1.828,0-3.505-0.646-4.815-1.722L15.878,5.184C16.953,6.496,17.6,8.171,17.6,10C17.6,14.197,14.196,17.599,9.999,17.599z" />
  </Svg>
);

export default Block;
