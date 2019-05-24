import React, { ReactElement, SFC } from 'react';
import useProviderContext from '../Provider/useProviderContext';
import {
  CssEmotion,
  CssRkta,
  RktaComponentStyles,
  RktaThemed,
} from '../Provider/theme/theme.types';

function themed(name: string, Component: Function): SFC<RktaThemed> {
  return ({ css, ...props }: RktaThemed): ReactElement => {
    const { theme } = useProviderContext();
    const ownCss = Array.isArray(css) ? css : [css];
    const thunk = (payload: CssRkta): CssEmotion => {
      if (typeof payload === 'function') return thunk(payload(theme, { ...props, css }));
      return payload;
    };
    const styles: RktaComponentStyles = theme[name] || {};
    const nextProps: RktaThemed = { css };
    const cssEmotion: CssEmotion[] = [thunk(styles.initialStyle)];
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
    return <Component {...nextProps} css={cssEmotion} />;
  };
}

export default themed;
