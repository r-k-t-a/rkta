/** @jsx jsx */
import { FC, forwardRef, RefObject } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Tabs.type';

import { useIndicator } from './useIndicator';

export const Tabs: FC<Props> = forwardRef<HTMLElement, Props>(
  ({ children, color = 'primary', index, overline, ...rest }: Props, externalRef): JSX.Element => {
    const [ref, indicator] = useIndicator(index, externalRef as RefObject<HTMLElement>);
    const { applyStyles } = useProviderContext();
    const [nextProps, Element] = applyStyles(
      { element: 'nav', ...rest, indicator, color, overline },
      'Tabs',
    );
    return (
      <Element {...nextProps} ref={ref}>
        {children}
      </Element>
    );
  },
);
