/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { TextProps } from './Text.type';

export const Text: FC<TextProps> = ({ children, element, ...rest }: TextProps): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Text');
  return <Element {...nextProps}>{children}</Element>;
};

Text.defaultProps = {
  element: 'span',
};
