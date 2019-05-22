import React, { ReactElement, SFC } from 'react';
import useProviderContext from '../Provider/useProviderContext';
import {
  CssChunkType,
  StylesInterface,
  ThemedComponentInterface,
} from '../Provider/theme/theme.types';

function themed(name: string, Component: Function): SFC<ThemedComponentInterface> {
  return ({ css, ...props }: ThemedComponentInterface): ReactElement => {
    const { theme } = useProviderContext();
    const ownCss = Array.isArray(css) ? css : [css];
    const thunk = (payload: CssChunkType): CssChunkType => {
      if (typeof payload === 'function') return thunk(payload(theme, { ...props, css }));
      return payload;
    };
    const styles: StylesInterface = theme[name] || {};
    const nextProps: ThemedComponentInterface = { css };
    const nextCss = [thunk(styles.initialStyle)];
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
    for (let i = 0; i < ownCss.length; i += 1) {
      nextCss.push(thunk(ownCss[i]));
    }
    return <Component {...nextProps} css={nextCss} />;
  };
}

export default themed;
