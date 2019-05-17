import React from 'react';

import Atom from '../Atom';
import themed from '../util/themed';
import { FontProps } from './types';

const Font = ({ children, css, ...rest }: FontProps): React.ReactNode => (
  <Atom element="span" css={css} {...rest}>
    {children}
  </Atom>
);

Font.defaultProps = {
  children: null,
  color: '',
};

export const RawFont = Font;

export default themed('Font', Font);
