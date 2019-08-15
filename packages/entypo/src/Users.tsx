import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { defaultIconSize } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Users = (props: any): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M15.989,19.129c0-2.246-2.187-3.389-4.317-4.307c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.989,0.648-0.667,0.932-2.481c0.12-0.752,0.692-0.012,0.802-1.729c0-0.684-0.313-0.854-0.313-0.854s0.159-1.013,0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095C7.88,1.195,7.655,0.654,8.679,0.112c-2.24-0.104-2.761,1.068-3.954,1.93c-1.015,0.756-1.289,1.953-1.24,2.59c0.065,0.78,0.223,1.793,0.223,1.793s-0.314,0.17-0.314,0.854c0.11,1.718,0.684,0.977,0.803,1.729C4.481,10.822,5.13,10.5,5.13,11.489c0,1.65-0.212,2.21-2.336,3.124C0.663,15.53,0,17,0.011,19.129C0.014,19.766,0,20,0,20h16C16,20,15.989,19.766,15.989,19.129z M18.528,13.365c-1.135-0.457-1.605-1.002-1.605-2.066c0-0.641,0.418-0.432,0.602-1.603c0.077-0.484,0.447-0.008,0.518-1.115c0-0.441-0.202-0.551-0.202-0.551s0.103-0.656,0.143-1.159c0.05-0.627-0.364-2.247-2.268-2.247c-1.903,0-2.318,1.62-2.269,2.247c0.042,0.502,0.144,1.159,0.144,1.159s-0.202,0.109-0.202,0.551c0.071,1.107,0.441,0.631,0.518,1.115c0.184,1.172,0.602,0.963,0.602,1.603c0,1.064-0.438,1.562-1.809,2.152c-0.069,0.029-0.12,0.068-0.183,0.102c1.64,0.712,4.226,1.941,4.838,4.447H20c0,0,0-1.906,0-2.318C20,14.682,19.727,13.848,18.528,13.365z" />
  </Svg>
);

export default Users;
