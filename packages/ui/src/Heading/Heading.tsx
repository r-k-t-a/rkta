import React, { ReactElement, SFC } from 'react';

import Text from '../Text';
import TextProps from '../Text/Text.d';
import Heading from './Heading.d';

const getHeading = (level: number, rest: Partial<Heading>): TextProps => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}` as React.ElementType;
    return { element, [element as string]: true, ...rest };
  }
  return { element: 'header', ...rest };
};

const Heading: SFC<Heading> = ({ level, ...rest }: Heading): ReactElement => (
  <Text {...getHeading(level, rest)} />
);

export default Heading;
