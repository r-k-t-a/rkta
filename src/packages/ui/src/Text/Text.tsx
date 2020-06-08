/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Text.type';

export type TextProps = Props;

export const Text: FC<Props> = ({ children, element, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

Text.defaultProps = {
  element: 'span',
};
