import React, { ReactElement, FC } from 'react';

import { Text } from '../Text';
import { TextProps } from '../Text/Text.type';
import { HeadingProps } from './Heading.type';

const getHeading = (level: number, rest: Partial<HeadingProps>): TextProps => {
  if (level >= 1 && level <= 6) {
    const element = `h${level}` as React.ElementType;
    return { element, [element as string]: true, ...rest };
  }
  return { element: 'header', ...rest };
};

export const Heading: FC<HeadingProps> = ({ level, ...rest }: HeadingProps): ReactElement => (
  <Text {...getHeading(level, rest)} />
);
