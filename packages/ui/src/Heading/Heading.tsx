import React, { ReactElement, SFC } from 'react';

import Text from '../Text';
import TextProps from '../Text/Text.d';
import Props from './Heading.d';

const getHeading = (level: number, rest: Partial<Props>): TextProps => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}` as React.ElementType;
    return { element, [element as string]: true, ...rest };
  }
  return { element: 'header', ...rest };
};

const Heading: SFC<Props> = ({ level, ...rest }: Props): ReactElement => (
  <Text {...getHeading(level, rest)} />
);

export default Heading;
