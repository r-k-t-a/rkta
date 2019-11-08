import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const New = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.69,12.344l-1.727-1.538c-0.5-0.445-0.5-1.174,0-1.619l1.727-1.539c0.5-0.445,0.367-0.859-0.296-0.924l-2.29-0.217c-0.662-0.062-1.02-0.633-0.791-1.266l1.215-3.383c0.228-0.635-0.051-0.865-0.619-0.514l-2.701,1.67c-0.568,0.354-1.303,0.16-1.631-0.426l-0.978-1.746c-0.329-0.588-0.872-0.59-1.207-0.008l-0.909,1.58C8.146,2.999,7.375,3.247,6.77,2.97l-1.6-0.734C4.562,1.956,4.097,2.278,4.133,2.952l0.086,1.615c0.037,0.674-0.461,1.367-1.104,1.541L1.57,6.522C0.928,6.696,0.81,7.202,1.31,7.647l1.727,1.539c0.5,0.445,0.5,1.174,0,1.619L1.31,12.344c-0.5,0.445-0.368,0.877,0.293,0.957l2.095,0.254c0.661,0.08,1.029,0.67,0.818,1.311l-1.074,3.258c-0.211,0.641,0.09,0.889,0.668,0.555l2.463-1.426c0.578-0.334,1.356-0.15,1.729,0.408l1.022,1.539c0.372,0.559,0.931,0.529,1.24-0.068l0.899-1.733c0.31-0.598,1.052-0.842,1.648-0.543l1.734,0.867c0.598,0.297,1.057-0.01,1.021-0.682l-0.087-1.617c-0.035-0.674,0.461-1.365,1.106-1.539l1.543-0.416C19.072,13.295,19.19,12.789,18.69,12.344z M11,14H9v-2h2V14z M11,11H9V6h2V11z" />
  </Svg>
);

export default New;
