import React from 'react';

import Atom from '../Atom';
import themed from '../util/themed';
import { FontProps } from './Font.types';

const Font = ({ children, element, ...rest }: FontProps): React.ReactNode =>
  React.createElement(Atom, { ...rest, element }, children);

Font.defaultProps = {
  children: undefined,
  color: 'text',
  css: undefined,
  element: 'span',
};

export const RawFont = Font;

export default themed('Font', Font);
