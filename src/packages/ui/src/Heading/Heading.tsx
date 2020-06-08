import React, { ReactElement, FC } from 'react';

import { Text } from '../Text';
import { Props as TextProps } from '../Text/Text.type';
import { Props } from './Heading.type';

const getHeading = (level: number, rest: Partial<Props>): TextProps => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}` as React.ElementType;
    return { element, [element as string]: true, ...rest };
  }
  return { element: 'header', ...rest };
};

export const Heading: FC<Props> = ({ level, ...rest }: Props): ReactElement => (
  <Text {...getHeading(level, rest)} />
);
