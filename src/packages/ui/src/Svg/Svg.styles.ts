import { css, SerializedStyles } from '@emotion/core';
import { Color, RktaTheme } from '../Provider/theme';

export const initialStyle = css`
  fill: currentColor;
  vertical-align: middle;
`;

export const block = css`
  display: block;
`;

export const color = (theme: RktaTheme, props: { color: Color }): SerializedStyles => css`
  fill: ${theme.color[props.color] || props.color};
`;

export const size = (theme: RktaTheme, props: { size: number }): SerializedStyles => {
  const { size: sizeValue } = props;
  return css`
    height: ${sizeValue}px;
    width: ${sizeValue}px;
  `;
};
