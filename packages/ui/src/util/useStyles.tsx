import useProviderContext from '../Provider/useProviderContext';

import { CssEmotion, CssRkta, RktaComponentStyles, RktaThemed } from '../Provider/theme/theme.defs';

interface NextProps {
  [key: string]: CssRkta | React.ReactNode;
}

function applyStyles(props, css, theme) {
  const ownCss = Array.isArray(css) ? css : [css];
  const thunk = (payload: CssRkta): CssEmotion => {
    if (typeof payload === 'function') return thunk(payload(theme, { ...props, css }));
    return payload;
  };

  const nextProps: NextProps = {};
  const cssEmotion: CssRkta[] = [];

  for (let index = 0; index < names.length; index += 1) {
    const name = names[index];
    const styles: RktaComponentStyles = theme[name] || {};
    cssEmotion.push(thunk(styles.initialStyle));

    const keys = Object.keys(props);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = props[key];
      if (key in styles) {
        if (value !== false) cssEmotion.push(thunk(styles[key]));
      } else {
        nextProps[key] = value;
      }
    }
    for (let i = 0; i < ownCss.length; i += 1) {
      cssEmotion.push(thunk(ownCss[i]));
    }
  }

  nextProps.css = cssEmotion;
  return nextProps;
}

const memoized = memoize(
  applyStyles,
  flow(
    Object.entries,
    flatten,
    toString,
  ),
);

export default (props: RktaThemed, ...names: string[]): NextProps => {
  const { theme } = useProviderContext();
  return memoized(props, theme, names);
};
