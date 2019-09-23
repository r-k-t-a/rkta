import { jsx } from '@emotion/core';
import React, { Children, FunctionComponent, ReactElement, useEffect, useState } from 'react';

import match from './match';
import { MediaProps } from './Media.defs';
import useProviderContext from '../Provider/useProviderContext';
import { CssEmotion, CssRkta } from '../Provider/theme/theme.defs';

const toString = (query: CssRkta[]): string => query.join(', ');

const cloneElement = (element: ReactElement, props: {}): ReactElement =>
  jsx(element.type, {
    key: element.key,
    ...element.props,
    ...props,
  });

const serverMedia = (children: ReactElement, queries: CssRkta[]): ReactElement => {
  const serverQueries = queries.map((query): string => `not ${query}`);
  const mediaQuery = `@media ${toString(serverQueries)} { display: none; }`;
  return (
    <>
      {Children.map(
        children,
        (child: ReactElement & { css?: CssEmotion }): ReactElement => {
          const childrenCss: CssEmotion[] = Array.isArray(child.css) ? child.css : [child.css];
          const nextCss = childrenCss.concat(mediaQuery);
          return cloneElement(child, { css: nextCss });
        },
      )}
    </>
  );
};

function clientMedia(children: ReactElement, queries: CssRkta[]): ReactElement | null {
  const mq = toString(queries);
  return match(mq) ? children : null;
}

const Media: FunctionComponent<MediaProps> = ({
  children,
  ...queries
}: MediaProps): ReactElement | null => {
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

  return resolve(children, mediaQueries);
};

export default Media;