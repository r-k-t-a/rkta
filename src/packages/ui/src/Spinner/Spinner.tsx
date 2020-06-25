/** @jsx jsx */
import { FC, ReactElement } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { SpinnerProps } from './Spinner.type';

export const Spinner: FC<SpinnerProps> = (props): ReactElement => {
  const { applyStyles } = useProviderContext();
  const [nextProps, Element] = applyStyles(props, 'Spinner');
  return <Element {...nextProps} />;
};

Spinner.defaultProps = {
  borderWidth: '2.4px',
  color: 'inherit',
  size: '24px',
};
