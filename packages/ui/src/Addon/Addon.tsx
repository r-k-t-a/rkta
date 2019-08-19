import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useProviderContext from '../Provider/useProviderContext';

import { AddonProps } from './Addon.defs';

const Addon: SFC<AddonProps> = ({ children, ...rest }: AddonProps): ReactElement => {
  const { useStyles } = useProviderContext();
  const nextProps = useStyles(rest, 'Addon', 'Text');
  return (
    <Atom element="span" {...nextProps}>
      {children}
    </Atom>
  );
};

export default Addon;
