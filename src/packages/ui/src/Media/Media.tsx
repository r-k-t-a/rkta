import { jsx } from '@emotion/core';
import { Children, ReactElement, ReactNode, FC, useEffect } from 'react';
import { useIsMounted, useToggle } from '@rkta/hooks';

import { matchMedia } from './matchMedia';
import { Props } from './Media.type';
import { useProviderContext } from '../Provider';
import { CssEmotion } from '../Provider/theme/theme.type';

const toString = (query: string[]): string => query.join(' and ');

const cloneElement = (element: ReactElement, props: {}): ReactElement =>
  jsx(element.type, {
    key: element.key,
    ...element.props,
    ...props,
  });

const serverMedia = (children: ReactElement | ReactElement[], queries: string[]): ReactNode => {
  const mediaQuery = `@media ${toString(queries)} { display: none; }`;
  function injectMediaQuery(child: ReactElement & { css?: CssEmotion }): ReactElement {
    const childrenCss: CssEmotion[] = Array.isArray(child.css) ? child.css : [child.css];
    const nextCss = childrenCss.concat(mediaQuery);
    return cloneElement(child, { css: nextCss });
  }
  return Children.map(children, injectMediaQuery);
};

function clientMedia(children: ReactNode, queries: string[]): ReactNode {
  const mq = toString(queries);
  return matchMedia(mq) ? children : null;
}

export const Media: FC<Props> = ({ children, ...queries }: Props): JSX.Element => {
  const isMounted = useIsMounted();
  const [, toggle] = useToggle();
  const { theme } = useProviderContext();
  const key = (name: string): string =>
    queries[name] === true ? theme.media[name] : `not ${theme.media[name]}`;
  const mediaQueries: string[] = Object.keys(queries).map(key);
  const resolve = isMounted ? clientMedia : serverMedia;

  function effect(): () => void {
    window.addEventListener('resize', toggle);
    return (): void => {
      window.removeEventListener('resize', toggle);
    };
  }
  useEffect(effect);

  return resolve(children, mediaQueries) as JSX.Element;
};
