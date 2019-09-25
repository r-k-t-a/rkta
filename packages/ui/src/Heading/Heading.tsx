import React, { ReactElement, SFC } from 'react';

import Text from '../Text';
import { TextProps } from '../Text/Text.defs';

import { HeadingProps } from './Heading.defs';

const getHeadingProps = (level: number, rest: Partial<HeadingProps>): TextProps => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}` as React.ElementType;
    return { element, [element as string]: true, ...rest };
  }
  return { element: 'header', ...rest };
};

const Heading: SFC<HeadingProps> = ({ level, ...rest }: HeadingProps): ReactElement => (
  <Text {...getHeadingProps(level, rest)} />
);

export default Heading;
