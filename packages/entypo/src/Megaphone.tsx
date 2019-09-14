import React, { ReactElement } from 'react';

import Svg from '@rkta/ui/Svg';
import { SvgProps } from '@rkta/ui/Svg/Svg.defs';
import { defaultIconSize } from './constants';

const Megaphone = (props: SvgProps): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.223,7.03c-1.584-3.686-4.132-6.49-5.421-5.967c-2.189,0.891,1.304,5.164-9.447,9.533c-0.929,0.379-1.164,1.888-0.775,2.792c0.388,0.902,1.658,1.801,2.587,1.424c0.161-0.066,0.751-0.256,0.751-0.256c0.663,0.891,1.357,0.363,1.604,0.928c0.296,0.68,0.939,2.158,1.158,2.66c0.219,0.502,0.715,0.967,1.075,0.83c0.359-0.137,1.582-0.602,2.05-0.779c0.468-0.178,0.579-0.596,0.436-0.924c-0.154-0.355-0.786-0.459-0.967-0.873c-0.18-0.412-0.769-1.738-0.938-2.156c-0.23-0.568,0.259-1.031,0.97-1.104c4.894-0.512,5.809,2.512,7.475,1.834C19.068,14.447,18.806,10.713,17.223,7.03z M16.672,13.006c-0.287,0.115-2.213-1.402-3.443-4.267c-1.231-2.863-1.076-5.48-0.79-5.597c0.286-0.115,2.165,1.717,3.395,4.58C17.065,10.585,16.958,12.889,16.672,13.006z" />
  </Svg>
);

export default Megaphone;
