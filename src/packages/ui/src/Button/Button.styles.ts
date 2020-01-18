import { css, SerializedStyles } from '@emotion/core';
import { Color, RktaTheme } from '../Provider/theme';
import { Props as Button } from './Button.type';

export const initialStyle = css`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  justify-content: center;
  display: inline-flex;
  outline: none;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &:active,
  &:hover,
  &:visited {
    color: currentColor;
  }
  > * {
    pointer-events: none;
  }
`;

export const blockLevel = css`
  display: flex;
  width: 100%;
`;

export const busy = css`
  font-size: 0;
  > * {
    visibility: hidden;
  }
`;

export const color = (theme: RktaTheme, props: Button): SerializedStyles => {
  const cssColor = (props.color && theme.color[props.color]) || props.color;
  return css`
    color: ${cssColor};
    &:active,
    &:hover,
    &:visited {
      color: cssColor;
    }
  `;
};

export const round = (theme: RktaTheme, props: Button): SerializedStyles => {
  const size = props.size || 48;
  return css`
    border-radius: ${size};
    height: ${size};
    min-height: ${size};
    width: ${size};
    padding: 0;
  `;
};

export const size = (theme: RktaTheme, props: Button): SerializedStyles => css`
  flex-direction: column;
  height: ${props.size};
  min-height: ${props.size};
  width: ${props.size};
`;

export const spinnerCss = css`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  visibility: visible !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
