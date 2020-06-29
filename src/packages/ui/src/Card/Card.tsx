/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { CardProps } from './Card.type';
import { useProviderContext } from '../Provider';

export const Card: FC<CardProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
