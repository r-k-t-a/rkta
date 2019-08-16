import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';

import { AddonProps } from './Addon.defs';

const Addon: SFC<AddonProps> = ({
  BaseElement = Atom,
  children,
  ...rest
}: AddonProps): ReactElement => {
  const nextProps = useStyles(rest, 'Addon', 'Text');
  return (
    <BaseElement element="span" {...nextProps}>
      {children}
    </BaseElement>
  );
};

export default Addon;
