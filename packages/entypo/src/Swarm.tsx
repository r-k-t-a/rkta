import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Swarm = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.286,18.821c-1.429-0.232-2.733-0.607-3.677-0.923c-0.046-0.015-0.781-0.282-1.007-0.37c-0.278-0.107-0.423-0.431-0.317-0.71c0.086-0.225,0.379-0.949,0.399-0.994c0.4-0.92,1-2.153,1.795-3.379c0.029,1.203,0.297,2.399,0.791,3.506C8.75,17.028,9.439,18.007,10.286,18.821z M10.173,7.027c-2.791-5.689-8.99-5.486-9.968-2.943c-0.751,1.952,2.535,6.602,10.097,3.244c0.002-0.001,0.002-0.001,0.004-0.002C10.28,7.279,10.192,7.079,10.173,7.027z M11.56,6.805c0.001,0,0.002-0.001,0.002-0.001c4.271-1.897,3.674-5.191,2.569-5.614c-1.487-0.569-4.19,1.624-2.647,5.447C11.499,6.664,11.55,6.777,11.56,6.805z M19.413,10.97C18.767,9.52,17.58,8.481,16.2,7.986c-0.139-0.05-0.281-0.073-0.423-0.073c-0.717,0-1.407,0.595-1.472,1.338c-0.109,1.239,0.137,2.501,0.68,3.718c0.535,1.199,1.294,2.213,2.27,2.957c0.254,0.194,0.565,0.285,0.875,0.285c0.559,0,1.117-0.296,1.339-0.826C20.04,14.023,20.066,12.432,19.413,10.97z M16.172,17.339c-1.195-0.912-2.142-2.139-2.815-3.646c-0.682-1.529-0.961-3.075-0.827-4.596c0.037-0.423,0.161-0.831,0.36-1.204c-0.035,0.009-0.111,0.027-0.114,0.028c-0.628,0.157-1.237,0.429-1.778,0.784c-0.784,0.514-1.475,1.277-1.772,2.177c-0.08,0.243-0.141,0.51-0.161,0.765c-0.095,1.218,0.103,2.476,0.636,3.67c0.516,1.155,1.285,2.118,2.213,2.853C12.48,18.617,13.5,18.9,14.334,18.9c0.783,0,1.556-0.233,2.25-0.585c0.217-0.11,0.695-0.408,0.726-0.429C16.895,17.78,16.506,17.594,16.172,17.339z" />
  </Svg>
);

export default Swarm;
