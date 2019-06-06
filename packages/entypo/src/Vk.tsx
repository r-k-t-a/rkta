import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const Vk = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.802,12.298c0,0,1.617,1.597,2.017,2.336c0.011,0.016,0.016,0.028,0.018,0.035c0.163,0.273,0.203,0.487,0.123,0.645c-0.135,0.261-0.592,0.392-0.747,0.403c0,0-2.778,0-2.858,0c-0.199,0-0.613-0.052-1.117-0.4c-0.385-0.269-0.768-0.712-1.139-1.145c-0.554-0.643-1.033-1.201-1.518-1.201c-0.062,0-0.122,0.01-0.18,0.03c-0.367,0.116-0.833,0.639-0.833,2.032c0,0.436-0.344,0.684-0.585,0.684c0,0-1.248,0-1.309,0c-0.446,0-2.768-0.156-4.827-2.327c-2.523-2.658-4.789-7.99-4.811-8.037C-0.105,5.008,0.191,4.82,0.511,4.82h2.886c0.387,0,0.513,0.234,0.601,0.444c0.102,0.241,0.48,1.205,1.1,2.288c1.004,1.762,1.621,2.479,2.114,2.479c0.093,0,0.181-0.023,0.264-0.07c0.644-0.354,0.524-2.654,0.494-3.128c0-0.092-0.001-1.027-0.331-1.479C7.403,5.03,7.001,4.904,6.758,4.858c0.065-0.094,0.203-0.238,0.38-0.323c0.441-0.22,1.238-0.252,2.029-0.252h0.439c0.858,0.012,1.08,0.067,1.392,0.146c0.628,0.15,0.64,0.557,0.585,1.943c-0.016,0.396-0.033,0.842-0.033,1.367c0,0.112-0.005,0.237-0.005,0.364c-0.019,0.711-0.044,1.512,0.458,1.841c0.064,0.04,0.139,0.062,0.217,0.062c0.174,0,0.695,0,2.108-2.425c0.62-1.071,1.1-2.334,1.133-2.429c0.028-0.053,0.112-0.202,0.214-0.262c0.078-0.048,0.182-0.056,0.236-0.056h3.395c0.37,0,0.621,0.056,0.67,0.196c0.082,0.227-0.016,0.92-1.566,3.016c-0.261,0.349-0.49,0.651-0.691,0.915C16.314,10.805,16.314,10.898,17.802,12.298z"
    />
  </Svg>
);

export default Vk;
