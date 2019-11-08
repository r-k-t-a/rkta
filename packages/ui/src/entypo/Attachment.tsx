import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const Attachment = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M5.602,19.8c-1.293,0-2.504-0.555-3.378-1.44c-1.695-1.716-2.167-4.711,0.209-7.116c1.391-1.408,6.966-7.053,9.748-9.87c0.988-1,2.245-1.387,3.448-1.06c1.183,0.32,2.151,1.301,2.468,2.498c0.322,1.22-0.059,2.493-1.046,3.493l-9.323,9.44c-0.532,0.539-1.134,0.858-1.738,0.922c-0.599,0.064-1.17-0.13-1.57-0.535c-0.724-0.736-0.828-2.117,0.378-3.337l6.548-6.63c0.269-0.272,0.705-0.272,0.974,0s0.269,0.714,0,0.986l-6.549,6.631c-0.566,0.572-0.618,1.119-0.377,1.364C5.5,15.252,5.66,15.301,5.845,15.28c0.283-0.029,0.606-0.216,0.909-0.521l9.323-9.439c0.64-0.648,0.885-1.41,0.69-2.145c-0.192-0.725-0.778-1.318-1.493-1.513c-0.726-0.197-1.48,0.052-2.12,0.7c-2.782,2.818-8.356,8.462-9.748,9.87c-1.816,1.839-1.381,3.956-0.209,5.143c1.173,1.187,3.262,1.629,5.079-0.212l9.748-9.87c0.269-0.272,0.705-0.272,0.974,0c0.269,0.272,0.269,0.714,0,0.987L9.25,18.15C8.101,19.312,6.814,19.8,5.602,19.8z" />
  </Svg>
);

export default Attachment;
