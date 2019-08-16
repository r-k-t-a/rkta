import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';

import { AddonProps } from './Addon.defs';

const Addon: SFC<AddonProps> = ({ children, ...rest }: AddonProps): ReactElement => {
  const nextProps = useStyles(rest, 'Addon', 'Text');
  return (
    <Atom element="span" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Addon;
