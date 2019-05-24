import React from 'react';

import Atom from '../Atom';
import FontProps from './Font.types';

const Font = ({ children, element, ...rest }: FontProps): React.ReactNode => (
  <Atom {...rest} element={element}>
    {children}
  </Atom>
);

Font.defaultProps = {
  color: 'text',
  element: 'span',
};

export default Font;
