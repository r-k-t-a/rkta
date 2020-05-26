import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const ChevronSmallLeft: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M12.141,13.418c0.268,0.271,0.268,0.709,0,0.978c-0.268,0.27-0.701,0.272-0.969,0l-3.83-3.908c-0.268-0.27-0.268-0.707,0-0.979l3.83-3.908c0.267-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.978L9,10L12.141,13.418z" />
  </Svg>
);

export default ChevronSmallLeft;
