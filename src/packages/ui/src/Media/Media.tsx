import { jsx } from '@emotion/core';
import { Children, ReactElement, ReactNode, FC, useEffect } from 'react';
import { useIsMounted, useToggle } from '@rkta/hooks';

import { matchMedia } from './matchMedia';
import { Props } from './Media.type';
import { useProviderContext } from '../Provider';
import { CssEmotion, RktaTheme } from '../Provider/theme/theme.type';

const cloneElement = (element: ReactElement, props: {}): ReactElement =>
  jsx(element.type, {
    key: element.key,
    ...element.props,
    ...props,
  });

const getServerCss = (query: string, negate = false): string =>
  `@media ${negate ? 'not' : ''} ${query} { display: none; }`;

const serverMedia = (
  children: ReactElement | ReactElement[],
  props: Partial<Props>,
  theme: RktaTheme,
): ReactNode => {
  const breakpointNames: string[] = [];
  const breakpointsMap: { [key: string]: { value: number; visible: boolean } } = {};

  theme.breakpoints.forEach(breakpoint => {
    const name = Object.keys(breakpoint)[0];
    breakpointNames.push(name);
    breakpointsMap[name] = {
      value: breakpoint[name],
      visible: false,
    };
  }, {});

  Object.keys(props).forEach(propName => {
    const breakpointName = propName.toLowerCase().replace(/^at(lea|mo)st/i, '');
    const breakpoint = breakpointsMap[breakpointName];
    if (!breakpoint) return;
    breakpoint.visible = true;

    const breakpointIndex = breakpointNames.indexOf(breakpointName);
    if (/^atmost/i.test(propName)) {
      breakpointNames.slice(breakpointIndex).forEach(bn => {
        breakpointsMap[bn].visible = true;
      });
    }
    if (/^atleast/i.test(propName)) {
      breakpointNames.slice(0, breakpointIndex).forEach(bn => {
        breakpointsMap[bn].visible = true;
      });
    }
  });

  const visibleSegments = breakpointNames.filter(name => breakpointsMap[name].visible);

  if (visibleSegments.length === 0) return children;

  const mediaQuery =
    visibleSegments.length === 1
      ? getServerCss(theme.media[visibleSegments[0]], true)
      : breakpointNames.reduce(
          (acc, name) =>
            breakpointsMap[name].visible ? acc : `${acc} ${getServerCss(theme.media[name])}`,
          '',
        );

  function injectMediaQuery(child: ReactElement & { css?: CssEmotion }): ReactElement {
    const childrenCss: CssEmotion[] = Array.isArray(child.css) ? child.css : [child.css];
    const nextCss = childrenCss.concat(mediaQuery);
    return cloneElement(child, { css: nextCss });
  }

  return Children.map(children, injectMediaQuery);
};

function clientMedia(children: ReactNode, props: Partial<Props>, theme: RktaTheme): ReactNode {
  const key = (acc: string[], name: string): string[] =>
    props[name] === true && theme.media[name] ? [...acc, theme.media[name]] : acc;
  const queries = Object.keys(props).reduce(key, []);
  return queries.length > 0 && matchMedia(queries.join(', ')) ? children : null;
}

export const Media: FC<Props> = ({ children, ...queries }: Props): JSX.Element => {
  const isMounted = useIsMounted();
  const [, toggle] = useToggle();
  const { theme } = useProviderContext();

  const resolve = isMounted ? clientMedia : serverMedia;

  function effect(): () => void {
    window.addEventListener('resize', toggle);
    return (): void => {
      window.removeEventListener('resize', toggle);
    };
  }
  useEffect(effect);

  return resolve(children, queries, theme) as JSX.Element;
};
