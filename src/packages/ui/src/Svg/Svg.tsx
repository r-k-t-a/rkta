/** @jsx jsx */
import { FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { SvgProps } from './Svg.type';

export const Svg: FC<SvgProps> = ({ children, ...rest }): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [nextProps] = applyStyles(rest, 'Svg');
  return <svg {...nextProps}>{children}</svg>;
};
