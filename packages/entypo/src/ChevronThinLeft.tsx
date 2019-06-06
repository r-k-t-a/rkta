import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const ChevronThinLeft = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979c-0.268,0.27-0.701,0.271-0.969,0l-7.83-7.908c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418z" />
  </Svg>
);

export default ChevronThinLeft;
