import { ElementType } from 'react';
import { flatten, join, memoize } from 'lodash';

import {
  CssEmotion,
  CssRkta,
  RktaComponentStyles,
  RktaThemed,
  ThemeInterface,
} from './theme/theme.defs';

import { ElementResolverFunction, ElementResolverProps } from './getElement';

export interface NextProps {
  [key: string]: CssRkta | React.ReactNode;
}

export type NextPropsAndElementType = [NextProps, React.ElementType];

export type useStylesFunctionType = (
  props: RktaThemed,
  ...names: string[]
) => NextPropsAndElementType;

interface ApplyStylesArgType {
  composition: string[];
  getElement: ElementResolverFunction;
  props: RktaThemed & ElementResolverProps & { element?: ElementType };
  theme: ThemeInterface;
}

function applyStyles({
  getElement,
  theme,
  props,
  composition,
}: ApplyStylesArgType): NextPropsAndElementType {
  const { css, element, ...rest } = props;
  const thunk = (payload: CssRkta): CssEmotion => {
    if (typeof payload === 'function') return thunk(payload(theme, { ...rest, css }));
    return payload;
  };
  const ownCss = Array.isArray(css) ? css : [css];

  const nextProps: NextProps = {};
  const cssEmotion: (CssRkta[] | CssRkta)[] = [];
  let keys = Object.keys(rest);
  let nextKeys = [];

  for (let index = 0; index < composition.length; index += 1) {
    const name = composition[index];
    const styles: RktaComponentStyles = theme[name] || {};
    const currentCssEmotion: CssRkta[] = [thunk(styles.initialStyle)];

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = rest[key];
      if (key in styles) {
        delete nextProps[key];
        if (value !== false) currentCssEmotion.push(thunk(styles[key]));
      } else {
        nextProps[key] = value;
        nextKeys.push(key);
      }
    }
    cssEmotion.push(currentCssEmotion);
    keys = nextKeys;
    nextKeys = [];
  }

  const flattenCssEmotion = flatten(cssEmotion.reverse());

  for (let i = 0; i < ownCss.length; i += 1) {
    flattenCssEmotion.push(thunk(ownCss[i]));
  }

  nextProps.css = flattenCssEmotion;
  const Element = getElement(element || 'div', props);
  return [nextProps, Element];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createArray = ({ theme, props, composition }: ApplyStylesArgType): any[] => [
  ...Object.entries(props),
  composition,
  theme.ts,
];

const createCacheKey = ({ getElement, theme, props, composition }: ApplyStylesArgType): string =>
  join(flatten(createArray({ getElement, theme, props, composition })));

export default memoize(applyStyles, createCacheKey);
