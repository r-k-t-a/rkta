import React from 'react';

import Atom from '../Atom';
import themed from '../util/themed';
import { FontProps } from './types';

const Font = ({ children, css, element, ...rest }: FontProps): React.ReactNode => (
  <Atom {...rest} element={element} css={css}>
    {children}
  </Atom>
);

Font.defaultProps = {
  children: null,
  color: 'text',
  css: null,
  element: 'span',
};

export const RawFont = Font;

export default themed('Font', Font);
