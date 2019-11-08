import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const Yelp = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M12.538,12.471l4.523,1.466c0,0,0.647,0.119,0.64,0.552c-0.004,0.305-0.197,0.652-0.197,0.652l-1.91,2.756c0,0-0.341,0.286-0.686,0.286c-0.344,0-0.741-0.537-0.741-0.537l-2.417-4.073c0,0-0.272-0.594,0.05-0.921C12.095,12.352,12.538,12.471,12.538,12.471z M11.57,10.6c0.231,0.396,0.87,0.281,0.87,0.281l4.513-1.331c0,0,0.615-0.253,0.703-0.589c0.086-0.337-0.102-0.743-0.102-0.743l-2.157-2.564c0,0-0.187-0.324-0.575-0.357c-0.428-0.037-0.691,0.486-0.691,0.486l-2.55,4.05C11.582,9.832,11.357,10.235,11.57,10.6z M9.438,9.021c0.531-0.132,0.616-0.911,0.616-0.911l-0.036-6.485c0,0-0.08-0.8-0.436-1.017c-0.559-0.342-0.724-0.164-0.884-0.14L4.951,1.873c0,0-0.367,0.123-0.558,0.432C4.12,2.742,4.67,3.384,4.67,3.384l3.894,5.358C8.564,8.742,8.949,9.143,9.438,9.021z M8.513,11.645c0.013-0.5-0.595-0.801-0.595-0.801L3.89,8.791c0,0-0.597-0.248-0.887-0.075C2.782,8.848,2.585,9.088,2.566,9.299l-0.262,3.259c0,0-0.039,0.565,0.106,0.822c0.205,0.364,0.881,0.111,0.881,0.111l4.702-1.049C8.175,12.318,8.495,12.306,8.513,11.645z M9.682,13.404c-0.404-0.209-0.887,0.224-0.887,0.224l-3.148,3.498c0,0-0.393,0.535-0.293,0.863c0.094,0.308,0.25,0.461,0.47,0.569l3.162,1.007c0,0,0.383,0.08,0.674-0.005c0.412-0.121,0.336-0.772,0.336-0.772l0.071-4.736C10.067,14.053,10.051,13.597,9.682,13.404z" />
  </Svg>
);

export default Yelp;
