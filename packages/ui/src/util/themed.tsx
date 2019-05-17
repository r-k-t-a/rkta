import React, { ReactElement, SFC } from 'react';
import useProviderContext from '../Provider/useProviderContext';
import { CssType, ThemedComponentProps } from './themedTypes';

function themed(name: string, Component: Function): SFC<ThemedComponentProps> {
  return ({ css, ...props }: ThemedComponentProps): ReactElement => {
    const { theme } = useProviderContext();

    const thunk = (payload: CssType): CssType => {
      if (typeof payload === 'function') return thunk(payload(theme, props));
      return Array.isArray(payload) ? payload : [payload];
    };
    const getColor = (color: string | number): string => {
      const { color: colors } = theme;
      const colorValue = typeof color === 'number' ? colors[`color${color}`] : colors[color];
      return colorValue || colors.text;
    };
    const styles = theme[name] || {};
    const nextProps = {};
    let nextCss = [];
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
    if (css) nextCss = nextCss.concat(thunk(css));
    return <Component getColor={getColor} {...nextProps} css={nextCss} />;
  };
}

export default themed;
