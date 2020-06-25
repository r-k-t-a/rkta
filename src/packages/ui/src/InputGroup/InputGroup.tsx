/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';

import { useProviderContext } from '../Provider';
import { PaperProps } from './InputGroup.type';

export const InputGroup: FC<PaperProps> = ({ children, ...props }: PaperProps): JSX.Element => {
  const { applyStyles } = useProviderContext();
  const [{ css, ...elementProps }, Element] = applyStyles(props, 'Paper', 'InputGroup');
  return (
    <Element {...elementProps} css={css}>
      {children}
    </Element>
  );
};
