import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Pinterest: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M8.617,13.227C8.091,15.981,7.45,18.621,5.549,20C4.963,15.838,6.41,12.713,7.083,9.395c-1.147-1.93,0.138-5.812,2.555-4.855c2.975,1.176-2.576,7.172,1.15,7.922c3.891,0.781,5.479-6.75,3.066-9.199C10.369-0.275,3.708,3.18,4.528,8.245c0.199,1.238,1.478,1.613,0.511,3.322c-2.231-0.494-2.897-2.254-2.811-4.6c0.138-3.84,3.449-6.527,6.771-6.9c4.201-0.471,8.144,1.543,8.689,5.494c0.613,4.461-1.896,9.293-6.389,8.945C10.081,14.411,9.571,13.807,8.617,13.227z" />
  </Svg>
);

export default Pinterest;
