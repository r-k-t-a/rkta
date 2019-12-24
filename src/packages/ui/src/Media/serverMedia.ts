import { jsx } from '@emotion/core';
import { Children, ReactElement, ReactNode } from 'react';

import { PropsWithoutChildren } from './Media.type';
import { CssEmotion, RktaTheme, MediaTuple } from '../Provider/theme/theme.type';
import { createTupleData } from '../util/createTupleData';

const cloneElement = (element: ReactElement, props: {}): ReactElement =>
  jsx(element.type, {
    key: element.key,
    ...element.props,
    ...props,
  });

const makePropsFilter = (props: PropsWithoutChildren, theme: RktaTheme) => (
  propName: string,
): boolean => theme.media[propName] && props[propName] === true;

const makeGetTuple = (theme: RktaTheme) => (propName: string): MediaTuple =>
  theme.media[propName].tuple;

const sortTuples = ([min1]: MediaTuple, [min2]: MediaTuple): number => min1 - min2;

const mergeMediaTuples = (acc: MediaTuple[], tuple: MediaTuple): MediaTuple[] => {
  if (acc.length === 0) return [tuple];
  const [min, max] = tuple;
  if (min === 0 && max === Infinity) return [tuple];

  const [lastMin, lastMax] = acc[acc.length - 1];
  if (min > lastMax + 1) {
    return [...acc, tuple];
  }
  return [...acc.slice(0, -1), [lastMin, Math.max(lastMax, max)]];
};

interface InvertMediaType {
  result: MediaTuple[];
  lastMax: number | null;
}

const invertMediaTuples = (
  acc: InvertMediaType,
  tuple: MediaTuple,
  index: number,
  tuples: MediaTuple[],
): InvertMediaType => {
  const [min, max] = tuple;
  const newTuples = [];

  if (index === 0 && min > 0) newTuples.push([0, min - 1]);
  if (acc.lastMax !== null) newTuples.push([acc.lastMax + 1, min - 1]);
  if (index === tuples.length - 1 && max !== Infinity) newTuples.push([max + 1, Infinity]);

  return { result: [...acc.result, ...newTuples], lastMax: max };
};

const tupleToString = (tuple: MediaTuple): string => createTupleData(tuple).query;

export const serverMedia = (
  children: ReactElement | ReactElement[],
  props: PropsWithoutChildren,
  theme: RktaTheme,
): ReactNode => {
  const truthy = makePropsFilter(props, theme);
  const tupples = makeGetTuple(theme);
  const { result: mediaConditions } = Object.keys(props)
    .filter(truthy)
    .map(tupples)
    .sort(sortTuples)
    .reduce(mergeMediaTuples, [])
    .reduce(invertMediaTuples, { result: [], lastMax: null });

  if (mediaConditions.length === 0) return children;

  const mediaQuery = `@media ${mediaConditions.map(tupleToString).join(', ')} { display: none; }`;

  function injectMediaQuery(child: ReactElement & { css?: CssEmotion }): ReactElement {
    const childrenCss: CssEmotion[] = Array.isArray(child.css) ? child.css : [child.css];
    const nextCss = childrenCss.concat(mediaQuery);
    return cloneElement(child, { css: nextCss });
  }
  return Children.map(children, injectMediaQuery);
};
