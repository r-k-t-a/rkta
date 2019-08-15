import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Icloud = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.909,5c1.884,0,3.417,1.598,3.417,3.561c0,0.136-0.012,0.29-0.037,0.484c0,0-0.163,1.262-0.206,1.594c-0.043,0.332,0.186,0.65,0.528,0.653c0.342,0.002,1.65,0.01,1.65,0.01C17.219,11.308,18,12.137,18,13.15c0,1.02-0.785,1.85-1.75,1.85H4.167C2.972,15,2,13.978,2,12.722c0-0.913,0.519-1.735,1.323-2.095c0,0,0.421-0.188,0.651-0.291c0.23-0.103,0.508-0.431,0.516-0.775c0.008-0.344,0.016-0.714,0.016-0.714c0.012-0.535,0.421-0.97,0.91-0.97c0.032,0,0.094,0.006,0.207,0.035c0,0,0.774,0.197,1.039,0.264c0.265,0.067,0.606-0.066,0.73-0.309c0.124-0.243,0.503-0.981,0.503-0.981C8.493,5.723,9.648,5,10.909,5 M10.909,3C8.828,3,7.023,4.207,6.116,5.974C5.891,5.917,5.659,5.878,5.417,5.878c-1.587,0-2.873,1.304-2.91,2.924C1.033,9.461,0,10.966,0,12.722C0,15.085,1.865,17,4.167,17H16.25c2.071,0,3.75-1.724,3.75-3.85c0-2.118-1.667-3.835-3.728-3.848c0.031-0.243,0.053-0.489,0.053-0.741C16.326,5.49,13.901,3,10.909,3L10.909,3z" />
  </Svg>
);

export default Icloud;
