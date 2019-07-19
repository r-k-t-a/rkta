import React, { ReactElement, SFC } from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';
import useStyles from '../util/useStyles';

export interface Props extends AtomProps {
  block?: boolean;
  /** One of theme colors or CSS Value: Color. */
  color?: string;
  size?: number;
  /** Always svg. */
  element?: never;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Svg: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const nextProps = useStyles('Svg', rest);
  return (
    <Atom {...nextProps} element="svg">
      {children}
    </Atom>
  );
};

export default Svg;
