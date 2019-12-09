import { jsx } from '@emotion/core';
import React, { Children, ReactElement, ReactNode, SFC, useEffect, useState } from 'react';

import { matchMedia } from './matchMedia';
import { Props } from './Media.type';
import { useProviderContext } from '../Provider';
import { CssEmotion, CssRkta } from '../Provider/theme/theme.type';

const toString = (query: CssRkta[]): string => query.join(', ');

const cloneElement = (element: ReactElement, props: {}): ReactElement =>
  jsx(element.type, {
    key: element.key,
    ...element.props,
    ...props,
  });

const serverMedia = (children: ReactElement | ReactElement[], queries: CssRkta[]): ReactNode => {
  const serverQueries = queries.map((query): string => `not ${query}`);
  const mediaQuery = `@media ${toString(serverQueries)} { display: none; }`;
  return Children.map(
    children,
    (child: ReactElement & { css?: CssEmotion }): ReactElement => {
      const childrenCss: CssEmotion[] = Array.isArray(child.css) ? child.css : [child.css];
      const nextCss = childrenCss.concat(mediaQuery);
      return cloneElement(child, { css: nextCss });
    },
  );
};

function clientMedia(children: ReactNode, queries: CssRkta[]): ReactNode {
  const mq = toString(queries);
  return matchMedia(mq) ? children : null;
}

export const Media: SFC<Props> = ({ children, ...queries }: Props): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);
  const [, updateState] = useState();
  const {
    theme: { media },
  } = useProviderContext();

  useEffect((): (() => void) => {
    if (!isMounted) setIsMounted(true);
    window.addEventListener('resize', updateState);
    return (): void => {
      window.removeEventListener('resize', updateState);
    };
  });
  const mediaQueries = Object.keys(queries).map((name): CssRkta => media[name]);
  const resolve = isMounted ? clientMedia : serverMedia;

  return <>{resolve(children, mediaQueries)}</>;
};
