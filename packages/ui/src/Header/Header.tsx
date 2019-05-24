import React from 'react';

import Font from '../Font';
import { Props as FontProps } from '../Font/Font';

export interface Props extends FontProps {
  level?: number;
}

const fallbackLevel = 1;

const getHeaderProps = (level: number | undefined = fallbackLevel, rest: Partial<Props>): Props => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}` as React.ElementType;
    return { element, [element as string]: true, ...rest };
  }
  return { element: 'header', ...rest };
};

const Header = ({ level, ...rest }: Props): React.ReactNode => (
  <Font {...getHeaderProps(level, rest)} />
);

Header.defaultProps = {
  level: fallbackLevel,
};

export default Header;
