import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';

import { AddonProps } from './Addon.d';

const Addon: SFC<AddonProps> = ({ children, ...rest }: AddonProps): ReactElement => {
  const nextProps = useStyles('Addon', rest);
  return (
    <Atom element="span" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Addon;
