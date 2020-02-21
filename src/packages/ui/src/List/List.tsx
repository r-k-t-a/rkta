/** @jsx jsx */
import { SFC, ReactElement, forwardRef } from 'react';
import { jsx } from '@emotion/core';

import { Props } from './List.type';
import { useProviderContext } from '../Provider';

export const List: SFC<Props> = forwardRef<HTMLElement, Props>(
  ({ children, ...rest }: Props, ref): ReactElement => {
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles(rest, 'List', 'Paper', 'Text');
    return (
      <Element {...nextProps} ref={ref}>
        {children}
      </Element>
    );
  },
);
