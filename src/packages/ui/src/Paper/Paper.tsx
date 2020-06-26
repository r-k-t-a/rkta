/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { PaperProps } from './Paper.type';

export const Paper: FC<PaperProps> = ({ children, ...rest }): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(rest, 'Paper', 'Text');
  return <Element {...nextProps}>{children}</Element>;
};
