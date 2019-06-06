import React, { ReactNode } from 'react';

import Svg from '@rkta/ui/Svg';
import { Props as SvgProps } from '@rkta/ui/Svg/Svg';
import { defaultIconSize } from './constants';

const EmojiSad = (props: SvgProps): ReactNode => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M10.001,0.4C4.698,0.4,0.4,4.698,0.4,10c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.6,4.698,15.301,0.4,10.001,0.4z M10,17.599c-4.197,0-7.6-3.402-7.6-7.6c0-4.197,3.402-7.6,7.6-7.6c4.197,0,7.6,3.402,7.6,7.6C17.6,14.197,14.197,17.599,10,17.599z M12.501,9.75c0.828,0,1.5-0.783,1.5-1.75s-0.672-1.75-1.5-1.75c-0.828,0-1.5,0.783-1.5,1.75S11.672,9.75,12.501,9.75z M7.501,9.75c0.828,0,1.5-0.783,1.5-1.75s-0.672-1.75-1.5-1.75c-0.828,0-1.5,0.783-1.5,1.75S6.672,9.75,7.501,9.75z M10.002,11.25c-3.424,0-4.622,2.315-4.672,2.414c-0.186,0.371-0.035,0.821,0.335,1.007C5.773,14.724,5.887,14.75,6,14.75c0.275,0,0.54-0.151,0.672-0.414c0.008-0.017,0.822-1.586,3.33-1.586c2.463,0,3.298,1.527,3.328,1.585c0.184,0.37,0.635,0.523,1.006,0.336c0.371-0.184,0.521-0.636,0.336-1.006C14.623,13.566,13.426,11.25,10.002,11.25z" />
  </Svg>
);

export default EmojiSad;
