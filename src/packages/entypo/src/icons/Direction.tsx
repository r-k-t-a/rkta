import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Direction: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.06,1.941c-0.586-0.586-1.144-0.033-3.041,0.879C9.944,5.259,1.1,10.216,1.1,10.216L8.699,11.3l1.085,7.599c0,0,4.958-8.843,7.396-13.916C18.092,3.085,18.645,2.527,18.06,1.941z M16.236,3.896l-5.519,10.247l-0.561-4.655L16.236,3.896z" />
  </Svg>
);

export default Direction;
