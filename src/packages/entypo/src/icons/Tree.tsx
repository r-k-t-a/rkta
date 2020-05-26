import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Tree: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M20,10c0-1.361-0.758-2.616-2.031-3.622c-0.002-0.001-0.004-0.001-0.005-0.003C17.602,2.803,14.177,0,10,0S2.398,2.803,2.036,6.375C2.035,6.377,2.033,6.377,2.031,6.378C0.758,7.384,0,8.639,0,10c0,3.112,3.947,5.669,9,5.97c0,0.338,0,0.683,0,1.03c0,1-1.821,1.911-1.821,1.911C7.08,18.96,7.031,19.084,7.07,19.188C7.07,19.188,7.375,20,8,20s1.124-0.5,2.374-0.5s2.439,0.432,2.439,0.432c0.102,0.038,0.251,0.005,0.329-0.073l0.717-0.717c0.078-0.078,0.058-0.173-0.046-0.212c0,0-1.812-0.68-1.812-1.93c0-0.312,0-0.706,0-1.121C16.565,15.324,20,12.903,20,10z M2,10c0-1.019,0.768-1.945,2.022-2.651C4.012,7.233,4,7.117,4,7c0-2.762,2.687-5,6-5s6,2.238,6,5c0,0.117-0.012,0.233-0.021,0.349C17.232,8.055,18,8.981,18,10c0,1.864-2.551,3.424-5.999,3.869c0-0.401,0-0.668,0-0.668c0-0.11,0.065-0.262,0.145-0.337l1.833-1.726c0.08-0.076,0.146-0.227,0.146-0.337V9.95c0-0.11-0.078-0.155-0.172-0.099l-1.779,1.047c-0.096,0.056-0.173,0.012-0.173-0.099V7.2c0-0.11-0.085-0.172-0.19-0.137L9.19,7.937C9.086,7.972,9.001,8.09,9.001,8.2v2.6c0,0.11-0.079,0.158-0.177,0.107L6.802,9.843c-0.097-0.051-0.24-0.03-0.318,0.048l-0.342,0.342c-0.078,0.078-0.073,0.201,0.009,0.273l2.7,2.361c0.083,0.073,0.15,0.222,0.15,0.332c0,0,0,0.298,0,0.765C5.056,13.719,2,12.04,2,10z" />
  </Svg>
);

export default Tree;
