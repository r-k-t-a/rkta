import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const FlowParallel: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M8.4,4c0-1.326-1.074-2.4-2.4-2.4S3.6,2.674,3.6,4c0,0.967,0.576,1.796,1.4,2.176v7.649C4.175,14.204,3.6,15.033,3.6,16c0,1.326,1.074,2.4,2.4,2.4s2.4-1.075,2.4-2.4c0-0.967-0.576-1.796-1.4-2.176V6.176C7.825,5.796,8.4,4.967,8.4,4z M7.384,16c0,0.764-0.62,1.385-1.384,1.385c-0.766,0-1.385-0.621-1.385-1.385c0-0.766,0.619-1.385,1.385-1.385C6.764,14.615,7.384,15.234,7.384,16z M6,5.385C5.235,5.385,4.616,4.764,4.616,4c0-0.766,0.619-1.385,1.385-1.385c0.764,0,1.384,0.619,1.384,1.385C7.384,4.764,6.764,5.385,6,5.385z M15,13.824V6.176c0.825-0.38,1.4-1.208,1.4-2.176c0-1.326-1.074-2.4-2.4-2.4S11.6,2.674,11.6,4c0,0.967,0.576,1.796,1.4,2.176v7.649c-0.825,0.38-1.4,1.208-1.4,2.176c0,1.326,1.074,2.4,2.4,2.4s2.4-1.075,2.4-2.4C16.4,15.033,15.825,14.204,15,13.824z M12.616,4c0-0.766,0.619-1.385,1.385-1.385c0.764,0,1.384,0.619,1.384,1.385c0,0.764-0.62,1.385-1.384,1.385C13.235,5.385,12.616,4.764,12.616,4z M14,17.385c-0.766,0-1.385-0.621-1.385-1.385c0-0.766,0.619-1.385,1.385-1.385c0.764,0,1.384,0.619,1.384,1.385C15.384,16.764,14.764,17.385,14,17.385z" />
  </Svg>
);

export default FlowParallel;
