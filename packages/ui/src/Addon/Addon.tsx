import React, { SFC, ReactNode, ReactElement } from 'react';

import Atom from '../Atom';
import { Props as AtomProps } from '../Atom/Atom';
import useStyles from '../util/useStyles';

export interface Props extends AtomProps {
  children: ReactNode;

  /** Reset Paddings */
  fitAll?: boolean;
  /** Reset Left Padding */
  fitLeft?: boolean;
  /** Reset Right Padding. Composed Atom Props: */
  fitRight?: boolean;
}

const Addon: SFC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const nextProps = useStyles('Addon', rest);
  return (
    <Atom element="span" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Addon;
