import React, { ReactElement, SFC } from 'react';
import useProviderContext from '../Provider/useProviderContext';
import { CssTypeThunk, StylesInterface, ThemedComponentProps } from '../types/theme.types';

function themed(name: string, Component: Function): SFC<ThemedComponentProps> {
  return ({ css, ...props }: ThemedComponentProps): ReactElement => {
    const { theme } = useProviderContext();
    const ownCss = Array.isArray(css) ? css : [css];
    const thunk = (payload: CssTypeThunk): CssTypeThunk => {
      if (typeof payload === 'function') return thunk(payload(theme, { ...props, css }));
      return payload as CssTypeThunk;
    };
    const styles: StylesInterface = theme[name] || {};
    const nextProps: ThemedComponentProps = { css };
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
