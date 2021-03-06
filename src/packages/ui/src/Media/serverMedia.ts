import { jsx, ClassNames, ClassNamesContent } from '@emotion/core';
import { Children, ReactElement, ReactNode, cloneElement } from 'react';

import { PropsWithoutChildren } from './Media.type';
import { CssEmotion, RktaTheme, MediaTuple } from '../Provider/theme';
import { stringifyMediaTuple } from '../util/stringifyMediaTuple';

const makePropsFilter = (props: PropsWithoutChildren, theme: RktaTheme) => (
  propName: string,
): boolean => !!theme.media[propName] && props[propName] === true;

const makeGetTuple = (theme: RktaTheme) => (propName: string): MediaTuple =>
  theme.mediaTuples[propName];

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

type InvertMediaType = {
  result: MediaTuple[];
  lastMax: number | null;
};

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

export const serverMedia = (
  children: ReactElement | ReactElement[],
  props: PropsWithoutChildren,
  theme: RktaTheme,
): ReactNode => {
  const truthy = makePropsFilter(props, theme);
  const tuples = makeGetTuple(theme);

  const { result: mediaConditions } = Object.keys(props)
    .filter(truthy)
    .map(tuples)
    .sort(sortTuples)
    .reduce(mergeMediaTuples, [])
    .reduce(invertMediaTuples, { result: [], lastMax: null });

  if (mediaConditions.length === 0) return children;

  const mediaQuery = `@media ${mediaConditions
    .map(stringifyMediaTuple)
    .join(', ')} { display: none; }`;

  function injectMediaQuery(child: ReactElement & { css?: CssEmotion }): ReactElement {
    const injectChildren = ({ css, cx }: ClassNamesContent<RktaTheme>) =>
      cloneElement(child, {
        ...child.props,
        className: cx(child.props.className, css(mediaQuery)),
      });
    return jsx(ClassNames, null, injectChildren);
  }
  return Children.map(children, injectMediaQuery);
};
