import React, { SFC, ReactElement } from 'react';

import Atom from '../Atom';
import useStyles from '../util/useStyles';
import { TextProps } from './Text.defs';

const Text: SFC<TextProps> = ({ children, element, ...rest }: TextProps): ReactElement => {
  const nextProps = useStyles(rest, 'Text');
  return (
    <Atom {...nextProps} element={element}>
      {children}
    </Atom>
  );
};

Text.defaultProps = {
  element: 'span',
};

export default Text;
