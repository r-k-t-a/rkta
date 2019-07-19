import React, { ReactElement, SFC } from 'react';

import Text from '../Text';
import { Props as TextProps } from '../Text/Text';

export interface Props extends TextProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  h1?: never;
  h2?: never;
  h3?: never;
  h4?: never;
  h5?: never;
  h6?: never;
}

const getHeadingProps = (level: number, rest: Partial<Props>): TextProps => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}` as React.ElementType;
    return { element, ...rest, [element as string]: true };
  }
  return { element: 'header', ...rest };
};

const Heading: SFC<Props> = ({ level, ...rest }: Props): ReactElement => (
  <Text {...getHeadingProps(level, rest)} />
);

export default Heading;
