import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const PriceRibbon: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M12.825,10.653c0.118-0.258,0.445-0.497,0.727-0.529s0.539-0.29,0.571-0.572c0.034-0.28,0.272-0.608,0.529-0.727c0.258-0.119,0.423-0.443,0.369-0.72c-0.058-0.278,0.068-0.663,0.276-0.854c0.209-0.194,0.266-0.553,0.127-0.801c-0.139-0.246-0.139-0.651,0-0.897c0.139-0.249,0.082-0.608-0.127-0.801c-0.208-0.193-0.333-0.577-0.276-0.854c0.054-0.278-0.111-0.603-0.369-0.722c-0.256-0.119-0.495-0.445-0.529-0.727c-0.033-0.28-0.29-0.538-0.571-0.572c-0.282-0.033-0.609-0.272-0.727-0.528c-0.12-0.258-0.444-0.423-0.722-0.366c-0.278,0.055-0.662-0.07-0.854-0.278c-0.193-0.21-0.553-0.266-0.8-0.127s-0.652,0.139-0.898,0C9.304,0.437,8.945,0.493,8.75,0.703C8.559,0.911,8.175,1.036,7.896,0.981C7.619,0.925,7.294,1.09,7.176,1.348C7.057,1.604,6.73,1.843,6.448,1.875C6.166,1.91,5.909,2.167,5.876,2.448C5.842,2.729,5.605,3.056,5.347,3.174C5.091,3.293,4.925,3.618,4.981,3.896c0.055,0.277-0.07,0.662-0.278,0.854S4.437,5.302,4.576,5.551c0.139,0.246,0.139,0.651,0,0.897C4.437,6.696,4.494,7.055,4.703,7.25c0.209,0.19,0.333,0.575,0.278,0.854c-0.056,0.277,0.11,0.602,0.366,0.72c0.258,0.119,0.495,0.447,0.528,0.727c0.034,0.282,0.29,0.54,0.572,0.572s0.609,0.272,0.728,0.529c0.118,0.256,0.443,0.421,0.72,0.366c0.278-0.055,0.663,0.069,0.854,0.278c0.194,0.208,0.553,0.266,0.801,0.127c0.246-0.139,0.651-0.139,0.898,0s0.607,0.081,0.8-0.127c0.193-0.21,0.576-0.333,0.854-0.278C12.381,11.074,12.706,10.909,12.825,10.653z M10,9.399C8.122,9.399,6.6,7.876,6.6,6c0-1.878,1.522-3.401,3.4-3.401S13.4,4.122,13.4,6C13.4,7.876,11.877,9.399,10,9.399z M5.975,11.409l-1.243,7.049l3.128-0.464l2.781,1.506l1.238-7.021c-0.597,0.173-1.227,0.271-1.88,0.271C8.49,12.75,7.1,12.248,5.975,11.409z M13.961,11.457c-0.311,0.226-0.642,0.426-0.99,0.597l-0.748,4.236l3.369-1.828L13.961,11.457z" />
  </Svg>
);

export default PriceRibbon;
