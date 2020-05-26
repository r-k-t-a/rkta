/** @jsx jsx */
import { ReactElement, FC } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Svg.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Svg: FC<Props> = ({ children, ...rest }: Props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps] = applyStyles({ ...rest }, 'Svg');
  return <svg {...nextProps}>{children}</svg>;
};
