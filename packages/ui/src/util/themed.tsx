/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import useProviderContext from '../Provider/useProviderContext';

interface ThemedComponentProps {
  css: Function | object;
}

function themed(name: string, Component: Function): Function {
  return ({ css, ...props }: ThemedComponentProps): ReactNode => {
    const { theme } = useProviderContext();

    const thunk = (payload: Function | object): object => {
      if (typeof payload === 'function') return thunk(payload(theme, props));
      return payload;
    };

    const getColor = (color: string | number): string => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { colors } = theme as any;
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
