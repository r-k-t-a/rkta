import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ImageInverted: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18,3H2C1.447,3,1,3.447,1,4v12c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C19,3.448,18.553,3,18,3z M13.25,6.5c0.69,0,1.25,0.56,1.25,1.25S13.94,9,13.25,9S12,8.44,12,7.75S12.56,6.5,13.25,6.5z M4,14l3.314-7.619l3.769,6.102l3.231-1.605L16,14H4z" />
  </Svg>
);

export default ImageInverted;
