import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ChevronWithCircleDown: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M12.505,8.698L10,11L7.494,8.698c-0.198-0.196-0.518-0.196-0.718,0c-0.197,0.196-0.197,0.515,0,0.71l2.864,2.807c0.199,0.196,0.52,0.196,0.717,0l2.864-2.807c0.199-0.195,0.198-0.514,0-0.71C13.024,8.502,12.704,8.502,12.505,8.698z M10,0.4c-5.302,0-9.6,4.298-9.6,9.6c0,5.303,4.298,9.6,9.6,9.6s9.6-4.297,9.6-9.6C19.6,4.698,15.302,0.4,10,0.4z M10,18.354c-4.615,0-8.354-3.74-8.354-8.354c0-4.614,3.739-8.354,8.354-8.354c4.613,0,8.354,3.74,8.354,8.354C18.354,14.614,14.613,18.354,10,18.354z" />
  </Svg>
);

export default ChevronWithCircleDown;
