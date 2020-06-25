/** @jsx jsx */
import { FC, ReactElement, forwardRef } from 'react';
import { jsx } from '@emotion/core';

import { ListProps } from './List.type';
import { useProviderContext } from '../Provider';

export const List: FC<ListProps> = forwardRef<HTMLElement, ListProps>(
  ({ children, ...rest }: ListProps, ref): ReactElement => {
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles(rest, 'List', 'Paper', 'Text');
    return (
      <Element {...nextProps} ref={ref}>
        {children}
      </Element>
    );
  },
);
