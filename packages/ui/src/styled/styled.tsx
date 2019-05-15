import * as React from 'react';
import useProviderContext from '../Provider/useProviderContext';
import ThemeDefs from '../Provider/theme/definitions';

const makeThunk = (props: {}, theme: ThemeDefs): any => css => {
  if (typeof css === 'function') return css(props, theme);
  return css;
};

function styled(name: string, Component: React.ElementType): Function {
  return ({ css, ...props }): React.ReactNode => {
    const { theme } = useProviderContext();
    const thunk = makeThunk(props, theme);
    const styles = theme[name] || {};
    const nextProps = {};
    const nextCss = [];
    const keys = Object.keys(props);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = props[key];
      if (key in styles) {
        if (value === true) nextCss.push(thunk(styles[key]));
      } else {
        nextProps[key] = value;
      }
    }
    if (css) nextCss.push(thunk(css));
    return <Component {...nextProps} css={nextCss} />;
  };
}

export default styled;
