import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const Medium: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.7502384,5C18.7502384,5,18,5,18,5.7501426s0,8.5002785,0,8.5002785S18,15,18.7502384,15H19v2h-6v-2h1V5.6999512h-0.0999756L10.8354492,17H8.1365967L5.0999761,5.6999512H5.0000005V15h1v2h-5v-2h0.2497627c0,0,0.7502373,0,0.7502373-0.7501431c0-0.7501421,0-8.5002775,0-8.5002775S2.0000005,5,1.2497631,5H1.0000005V3h6.6340332l2.3269038,8.6591797h0.0766602L12.3859863,3H19v2H18.7502384z" />
  </Svg>
);

export default Medium;
