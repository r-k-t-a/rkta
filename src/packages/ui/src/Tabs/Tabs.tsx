/** @jsx jsx */
import { FC, forwardRef, RefObject } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { Props } from './Tabs.type';
import { useIndicator } from './useIndicator';

export const Tabs: FC<Props> = forwardRef<HTMLElement, Props>(
  ({ children, color = 'primary', index, ...rest }: Props, externalRef): JSX.Element => {
    const [ref, indicator] = useIndicator(index, externalRef as RefObject<HTMLElement>);
    const { applyStyles } = useProviderContext();
    const [props, Element] = applyStyles(
      { element: 'nav', ...rest, indicator: index > -1 && indicator, color },
      'Tabs',
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { overline, vertical, ...elementProps } = props;
    return (
      <Element {...elementProps} ref={ref}>
        {children}
      </Element>
    );
  },
);
