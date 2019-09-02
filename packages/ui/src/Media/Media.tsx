/** @jsx jsx */
import { Children, SFC, cloneElement, ReactElement, ReactNode, useEffect, useState } from 'react';

import match from './match';
import { MediaProps } from './Media.defs';
import useProviderContext from '../Provider/useProviderContext';

const toString = (query: string[]): string => query.join(', ');

const serverMedia = (children: ReactElement, queries: string[]): ReactElement => {
  const serverQueries = queries.map((query): string => `not ${query}`);
  const mediaQuery = `@media ${toString(serverQueries)}`;
  // TODO: css = child.css.concat(mediaQuery)
  return Children.map(children, (child): ReactElement => cloneElement(child, { css: mediaQuery }));
};

function clientMedia(children: ReactElement, queries: string[]): ReactNode {
  const mq = toString(queries);
  return match(mq) ? children : null;
}

const Paper: SFC<MediaProps> = ({ children, ...queries }: MediaProps): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);
  const {
    theme: { media },
  } = useProviderContext();
  useEffect((): void => {
    if (!isMounted) setIsMounted(true);
  });
  const mediaQueries = Object.keys(queries).map((name): string => media[name]);
  const resolve = isMounted ? serverMedia : clientMedia;
  return resolve(children, mediaQueries);
};

export default Paper;
