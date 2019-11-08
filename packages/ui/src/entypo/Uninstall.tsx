import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const Uninstall = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M19.059,10.898l-3.171-7.927C15.654,2.384,15.086,2,14.454,2H5.546C4.914,2,4.346,2.384,4.112,2.971l-3.171,7.927c-0.288,0.721-0.373,1.507-0.246,2.272l0.59,3.539C1.409,17.454,2.053,18,2.808,18h14.383c0.755,0,1.399-0.546,1.523-1.291l0.59-3.539C19.433,12.405,19.348,11.619,19.059,10.898z M5.52,4.786l1.639-1.132l2.868,2.011l2.868-2.011l1.639,1.132l-2.869,2.033l2.928,2.06l-1.639,1.171l-2.927-2.076L7.1,10.05L5.461,8.879l2.928-2.06L5.52,4.786z M16.959,15.245C16.887,15.681,16.51,16,16.068,16H3.932c-0.442,0-0.819-0.319-0.891-0.755l-0.365-2.193C2.583,12.501,3.008,12,3.567,12h12.867c0.558,0,0.983,0.501,0.891,1.052L16.959,15.245z" />
  </Svg>
);

export default Uninstall;
