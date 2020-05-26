/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Svg.type';

export const Svg: FC<Props> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps] = applyStyles(rest, 'Svg');
  return <svg {...nextProps}>{children}</svg>;
};
