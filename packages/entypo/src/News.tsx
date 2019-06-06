import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const News = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14,5h-4v2h4V5z M14,8h-4v1h4V8z M9,5H6v4h3V5z M9,11h5v-1H9V11z M12,13h2v-1h-2V13z M14,14H6v1h8V14z M11,12H6v1h5V12z M8,10H6v1h2V10z M17,1H3C2.447,1,2,1.447,2,2v16c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1V2C18,1.448,17.553,1,17,1z M16,17H4V3h12V17z"
    />
  </Svg>
);

export default News;
