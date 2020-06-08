/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './Card.type';
import { useProviderContext } from '../Provider';

export type CardProps = Props;

export const Card: FC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
