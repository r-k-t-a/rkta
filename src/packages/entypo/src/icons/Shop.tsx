import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Shop: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M6.123,7.25L6.914,2H2.8L1.081,6.5C1.028,6.66,1,6.826,1,7c0,1.104,1.15,2,2.571,2C4.881,9,5.964,8.236,6.123,7.25z M10,9c1.42,0,2.571-0.896,2.571-2c0-0.041-0.003-0.082-0.005-0.121L12.057,2H7.943l-0.51,4.875C7.431,6.916,7.429,6.957,7.429,7C7.429,8.104,8.58,9,10,9z M15,10.046V14H5v-3.948C4.562,10.21,4.08,10.3,3.571,10.3c-0.195,0-0.384-0.023-0.571-0.049V16.6c0,0.77,0.629,1.4,1.398,1.4H15.6c0.77,0,1.4-0.631,1.4-1.4v-6.348c-0.188,0.025-0.376,0.049-0.571,0.049C15.923,10.3,15.439,10.208,15,10.046z M18.92,6.5L17.199,2h-4.113l0.79,5.242C14.03,8.232,15.113,9,16.429,9C17.849,9,19,8.104,19,7C19,6.826,18.972,6.66,18.92,6.5z" />
  </Svg>
);

export default Shop;
