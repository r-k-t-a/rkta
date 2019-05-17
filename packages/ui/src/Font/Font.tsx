import React from 'react';

import Atom from '../Atom/Atom';
import themed, { CssType } from '../util/themed';

interface FontProps {
  children: React.ReactNode;
  color?: string | number;
  css: CssType;
  getColor: Function;
}

const getFontProps = (
  color: string | number,
  getColor: Function,
  rest: Partial<FontProps>,
): object => {
  // TODO решить, как обрабатывать данный случай
  // const nextCss = { ...rest.css, color: getColor(color) };
  const nextCss = rest.css;
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

export const RawFont = Font;

export default themed('Font', Font);
