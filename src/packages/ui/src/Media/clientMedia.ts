import { ReactNode } from 'react';

import { matchMedia } from './matchMedia';
import { PropsWithoutChildren } from './Media.type';
import { RktaTheme } from '../Provider/theme/theme.type';

export function clientMedia(
  children: ReactNode,
  props: PropsWithoutChildren,
  theme: RktaTheme,
): ReactNode {
  const key = (acc: string[], name: string): string[] =>
    props[name] === true && theme.media[name] ? [...acc, theme.media[name]] : acc;
  const queries = Object.keys(props).reduce(key, []);
  return queries.length > 0 && matchMedia(queries.join(', ')) ? children : null;
}
