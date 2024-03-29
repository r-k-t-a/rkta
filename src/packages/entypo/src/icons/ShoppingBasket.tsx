import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & Parameters<typeof Svg>[0];

const ShoppingBasket: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M18.399,7h-5.007l-1.812,1.812c-0.453,0.453-1.056,0.702-1.696,0.702c-0.642,0-1.244-0.25-1.698-0.703C7.734,8.359,7.484,7.757,7.483,7.116c0-0.039,0.01-0.077,0.011-0.116H1.6C1.268,7,1,7.268,1,7.6V10h18V7.6C19,7.268,18.73,7,18.399,7z M10.768,7.999l5.055-5.055c0.235-0.234,0.237-0.613,0.002-0.849l-0.92-0.92c-0.234-0.234-0.614-0.233-0.85,0L9,6.231c-0.488,0.488-0.488,1.28,0,1.768C9.488,8.486,10.279,8.487,10.768,7.999z M3.823,17.271C3.92,17.672,4.338,18,4.75,18h10.5c0.412,0,0.83-0.328,0.927-0.729L17.7,11H2.3L3.823,17.271z" />
  </Svg>
);

export default ShoppingBasket;
