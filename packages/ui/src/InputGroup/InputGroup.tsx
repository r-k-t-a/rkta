/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';

import { useProviderContext } from '../Provider';
import { Props } from './InputGroup.type';

export const InputGroup: SFC<Props> = ({ children, ...props }: Props): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [{ css, ...elementProps }, Element] = applyStyles(props, 'Paper', 'InputGroup');
  return (
    <Element {...elementProps} css={css}>
      {children}
    </Element>
  );
};
