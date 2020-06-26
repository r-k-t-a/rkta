/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { PlaceholderProps } from './Placeholder.type';

export const Placeholder: FC<PlaceholderProps> = ({ children, element, ...rest }): JSX.Element => {
  if (children) return children as JSX.Element;
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Placeholder');
  return <Element {...nextProps} />;
};

Placeholder.defaultProps = {
  element: 'span',
};
