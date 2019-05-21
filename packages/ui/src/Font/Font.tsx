import React from 'react';

import Atom from '../Atom';
import themed from '../util/themed';
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

export const RawFont = Font;

export default themed('Font', Font);
