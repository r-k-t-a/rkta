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

/**
 * ```js
 * import { Heading } from '@rkta/ui';
 *
 * <Heading level={1}>Level 1</Heading>
 * <Heading level={2}>Level 2</Heading>
 * <Heading level={3}>Level 3</Heading>
 * <Heading level={4}>Level 4</Heading>
 * <Heading level={5}>Level 5</Heading>
 * <Heading level={6}>Level 6</Heading>
 * ```
 */

export const Heading: FC<HeadingProps> = ({ level, ...rest }): ReactElement => (
  <Text {...getHeading(level, rest)} />
);
