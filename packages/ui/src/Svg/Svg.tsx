import React from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';

export interface Props extends AtomProps {
  block?: boolean;
  /** One of theme colors or CSS Value: Color. */
  color?: string;
  size?: number;
  /** Always svg. */
  element?: never;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Svg = ({ children, ...rest }: Props): React.ReactNode => (
  <Atom {...rest} element="svg">
    {children}
  </Atom>
);

export default Svg;
