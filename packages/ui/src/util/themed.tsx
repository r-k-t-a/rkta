/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ElementType, ReactNode } from 'react';
import useProviderContext from '../Provider/useProviderContext';

interface ThemedComponentProps {
  css: Function | object;
}

function themed(name: string, Component: ElementType): Function {
  return ({ css, ...props }: ThemedComponentProps): ReactNode => {
    const { theme } = useProviderContext();
    const thunk = (payload: Function | object): object => {
      if (typeof payload === 'function') return thunk(payload(theme, props));
      return payload;
    };
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

export default themed;
