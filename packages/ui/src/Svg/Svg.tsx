import React from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';

export interface Props extends AtomProps {
  children: React.ReactNode;
  /** One of theme colors or CSS Value: Color. */
  color?: string;

  size?: number;
  viewBox?: string;
  block?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Svg = ({ children, size, ...rest }: Props): React.ReactNode => (
  <Atom {...rest} element="svg">
    {children}
  </Atom>
);

Svg.defaultProps = {
  size: 24,
  viewBox: '0 0 20 20',
};

export default Svg;
