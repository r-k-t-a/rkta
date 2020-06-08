/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';

import { useProviderContext } from '../Provider';
import { Props } from './InputGroup.type';

export type InputGroupProps = Props;

export const InputGroup: FC<Props> = ({ children, ...props }: Props): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [{ css, ...elementProps }, Element] = applyStyles(props, 'Paper', 'InputGroup');
  return (
    <Element {...elementProps} css={css}>
      {children}
    </Element>
  );
};
