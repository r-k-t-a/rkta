import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Code: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M5.719,14.75c-0.236,0-0.474-0.083-0.664-0.252L-0.005,10l5.341-4.748C5.748,4.887,6.38,4.922,6.747,5.335c0.367,0.413,0.33,1.045-0.083,1.412L3.005,10l3.378,3.002c0.413,0.367,0.45,0.999,0.083,1.412C6.269,14.637,5.994,14.75,5.719,14.75z M14.664,14.748L20.005,10l-5.06-4.498c-0.413-0.367-1.045-0.33-1.411,0.083c-0.367,0.413-0.33,1.045,0.083,1.412L16.995,10l-3.659,3.252c-0.413,0.367-0.45,0.999-0.083,1.412C13.45,14.887,13.725,15,14,15C14.236,15,14.474,14.917,14.664,14.748z M9.986,16.165l2-12c0.091-0.545-0.277-1.06-0.822-1.151c-0.547-0.092-1.061,0.277-1.15,0.822l-2,12c-0.091,0.545,0.277,1.06,0.822,1.151C8.892,16.996,8.946,17,9.001,17C9.481,17,9.905,16.653,9.986,16.165z" />
  </Svg>
);

export default Code;
