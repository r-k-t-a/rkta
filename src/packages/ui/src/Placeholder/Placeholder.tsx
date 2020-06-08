/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Placeholder.type';

export type PlaceholderProps = Props;

export const Placeholder: FC<Props> = ({ children, element, ...rest }: Props): JSX.Element => {
  if (children) return children as JSX.Element;
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles({ element, ...rest }, 'Placeholder');
  return <Element {...nextProps} />;
};

Placeholder.defaultProps = {
  element: 'span',
};
