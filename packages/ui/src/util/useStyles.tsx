import { flatten, join, memoize } from 'lodash';
import useProviderContext from '../Provider/useProviderContext';

import {
  CssEmotion,
  CssRkta,
  RktaComponentStyles,
  RktaThemed,
  ThemeInterface,
} from '../Provider/theme/theme.defs';

interface NextProps {
  [key: string]: CssRkta | React.ReactNode;
}

function applyStyles(props: RktaThemed, theme: ThemeInterface, names: string[]): NextProps {
  const { css, ...rest } = props;
  const thunk = (payload: CssRkta): CssEmotion => {
    if (typeof payload === 'function') return thunk(payload(theme, { ...rest, css }));
    return payload;
  };
  const ownCss = Array.isArray(css) ? css : [css];

  const nextProps: NextProps = {};
  const cssEmotion: (CssRkta[] | CssRkta)[] = [];
  let keys = Object.keys(rest);
  let nextKeys = [];

  for (let index = 0; index < names.length; index += 1) {
    const name = names[index];
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

  const reversedCssEmotion = cssEmotion.reverse();

  for (let i = 0; i < ownCss.length; i += 1) {
    reversedCssEmotion.push(thunk(ownCss[i]));
  }

  nextProps.css = reversedCssEmotion;
  return nextProps;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createArray = (props: RktaThemed, theme: ThemeInterface, names: string[]): any[] => [
  ...Object.entries(props),
  names,
  theme.ts,
];

const createCacheKey = (props: RktaThemed, theme: ThemeInterface, names: string[]): string =>
  join(flatten(createArray(props, theme, names)));

const memoizedProps = memoize(applyStyles, createCacheKey);

export default (props: RktaThemed, ...names: string[]): NextProps => {
  const { theme } = useProviderContext();

  return memoizedProps(props, theme, names);
};
