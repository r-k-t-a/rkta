import React, { SFC, ReactElement } from 'react';

import Text from '../Text';
import useStyles from '../util/useStyles';

import { AddonProps } from './Addon.d';

const Addon: SFC<AddonProps> = ({
  BaseElement = Text,
  children,
  ...rest
}: AddonProps): ReactElement => {
  const nextProps = useStyles('Addon', rest);
  return (
    <BaseElement element="span" {...nextProps}>
      {children}
    </BaseElement>
  );
};

export default Addon;
