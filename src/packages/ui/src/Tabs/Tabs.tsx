/** @jsx jsx */
import { FC, forwardRef, RefObject } from 'react';
import { jsx } from '@emotion/core';

import { useProviderContext } from '../Provider';
import { TabsProps } from './Tabs.type';
import { useIndicator } from './useIndicator';

/**
 * ```js
 * import { Tabs, Button } from '@rkta/ui';
 * import { useState } from 'react';
 *
 * {() => {
 *   const [index, setIndex] = useState(0);
 *   return (
 *     <Tabs index={index}>
 *       {[1, 2, 39999].map((key, currentIndex) => (
 *         <Button key={key} onClick={() => setIndex(currentIndex)}>Tab {key}</Button>
 *       ))}
 *     </Tabs>
 *   );
 * }}
 * ```
 */
export const Tabs: FC<TabsProps> = forwardRef<HTMLElement, TabsProps>(
  ({ children, color = 'primary', index, element = 'nav', ...rest }, externalRef): JSX.Element => {
    const [ref, indicator] = useIndicator(index, externalRef as RefObject<HTMLElement>);
    const { applyStyles } = useProviderContext();
    const [props, Element] = applyStyles(
      { element, ...rest, indicator: index > -1 && indicator, color },
      'Tabs',
      'Paper',
      'Text',
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { indicatorSize, overline, vertical, ...elementProps } = props;
    return (
      <Element {...elementProps} ref={ref}>
        {children}
      </Element>
    );
  },
);
