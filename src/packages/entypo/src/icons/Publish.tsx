import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Publish: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M9.967,8.193L5,13h3v6h4v-6h3L9.967,8.193z M18,1H2C0.9,1,0,1.9,0,3v12c0,1.1,0.9,2,2,2h4v-2H2V6h16v9h-4v2h4c1.1,0,2-0.9,2-2V3C20,1.9,19.1,1,18,1z M2.5,4.25c-0.414,0-0.75-0.336-0.75-0.75c0-0.414,0.336-0.75,0.75-0.75c0.414,0,0.75,0.336,0.75,0.75C3.25,3.914,2.914,4.25,2.5,4.25z M4.5,4.25c-0.414,0-0.75-0.336-0.75-0.75c0-0.414,0.336-0.75,0.75-0.75c0.414,0,0.75,0.336,0.75,0.75C5.25,3.914,4.914,4.25,4.5,4.25z M18,4H6V3h12.019L18,4z" />
  </Svg>
);

export default Publish;
