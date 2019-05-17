/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactElement, SFC } from 'react';
import useProviderContext from '../Provider/useProviderContext';

export interface ThemedComponentProps {
  css: Function | object;
}

function themed(name: string, Component: Function): SFC<ThemedComponentProps> {
  return ({ css, ...props }: ThemedComponentProps): ReactElement => {
    const { theme } = useProviderContext();

    const thunk = (payload: Function | object): object => {
      if (typeof payload === 'function') return thunk(payload(theme, props));
      return payload;
    };
    const getColor = (color: string | number): string => {
      const { color: colors } = theme;
      const colorValue = typeof color === 'number' ? colors[`color${color}`] : colors[color];
      return colorValue || colors.text;
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
    return <Component getColor={getColor} {...nextProps} css={nextCss} />;
  };
}

export default themed;
