import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const AddUser: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.989,19.129C16,17,13.803,15.74,11.672,14.822c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.989,0.648-0.667,0.932-2.481c0.12-0.752,0.692-0.012,0.802-1.729c0-0.684-0.313-0.854-0.313-0.854s0.159-1.013,0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095C7.88,1.195,7.655,0.654,8.679,0.112c-2.24-0.104-2.761,1.068-3.954,1.93c-1.015,0.756-1.289,1.953-1.24,2.59c0.065,0.78,0.223,1.793,0.223,1.793s-0.314,0.17-0.314,0.854c0.11,1.718,0.684,0.977,0.803,1.729C4.481,10.822,5.13,10.5,5.13,11.489c0,1.65-0.212,2.21-2.336,3.124C0.663,15.53,0,17,0.011,19.129C0.014,19.766,0,20,0,20h16C16,20,15.986,19.766,15.989,19.129z M17,10V7h-2v3h-3v2h3v3h2v-3h3v-2H17z" />
  </Svg>
);

export default AddUser;
