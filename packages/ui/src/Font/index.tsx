import React from 'react';

import Atom from '../Atom';
import themed from '../util/themed';

interface FontProps {
  children: React.ReactNode;
  color: string | number;
  css: object;
  getColor: Function;
}

const getFontProps = (
  color: string | number,
  getColor: Function,
  rest: Partial<FontProps>,
): object => {
  const nextCss = { ...rest.css, color: getColor(color) };
  return { ...rest, css: nextCss };
};

const Font = ({ children, getColor, color, ...rest }: FontProps): React.ReactNode => (
  <Atom element="span" {...getFontProps(color, getColor, rest)}>
    {children}
  </Atom>
);

Font.defaultProps = {
  children: null,
  color: '',
};

export default themed('Font', Font);
