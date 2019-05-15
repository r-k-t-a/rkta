import * as React from 'react';

const makeThunk = (props, theme): function => css => {
  if (typeof css === 'function') return css(props, theme);
  return css;
};

function styled(name: string, Component: function): function {
  return ({ css, ...props }): ReactComponent => {
    const { theme } = useProviderContext();
    const thunk = makeThunk(props, theme);
    const styles = theme[name];
    const nextProps = {};
    const nextCss = [];
    for (const key in props) {
      const value = props[key];
      if (key in styles) {
        if (value === true) nextCss.push(thunk(styles[key]));
      } else {
        nextProps[key] = value;
      }
    }
    return <Component {...nextProps} css={nextCss} />;
  };
}

export default styled;
