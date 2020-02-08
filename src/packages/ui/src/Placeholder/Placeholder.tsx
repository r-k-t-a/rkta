/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Placeholder.type';

export const Placeholder = ({ children, element, ...rest }: Props): ReactNode => {
  if (children) return children;
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Placeholder');
  return <Element {...nextProps} />;
};

Placeholder.defaultProps = {
  element: 'span',
};
