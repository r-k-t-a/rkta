import React, { FC } from 'react';

import { Svg } from '@rkta/ui';
import { defaultIconSize } from '../constants';

type Props = {
  viewBox?: never;
} & typeof Svg;

const Vine: FC<Props> = (props): JSX.Element => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M17.452,9.951c-0.438,0.101-0.863,0.145-1.244,0.145c-2.145,0-3.797-1.496-3.797-4.102c0-1.277,0.493-1.941,1.192-1.941c0.664,0,1.107,0.596,1.107,1.805c0,0.688-0.184,1.44-0.32,1.887c0,0,0.66,1.152,2.469,0.799c0.385-0.852,0.593-1.956,0.593-2.924c0-2.605-1.33-4.119-3.763-4.119c-2.504,0-3.968,1.922-3.968,4.461c0,2.512,1.175,4.668,3.113,5.651c-0.815,1.629-1.852,3.065-2.933,4.146c-1.961-2.371-3.734-5.534-4.463-11.706H2.548c1.335,10.279,5.319,13.553,6.373,14.181c0.596,0.358,1.108,0.341,1.654,0.034c0.855-0.485,3.422-3.054,4.847-6.061c0.597-0.002,1.314-0.069,2.03-0.231V9.951z" />
  </Svg>
);

export default Vine;
