import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { Props } from './Svg.type';

export const initialStyle = css`
  fill: currentColor;
  vertical-align: middle;
`;

export const block = css`
  display: block;
`;

export const color = (theme: RktaTheme, { color: fill = '' }: Props): SerializedStyles => css`
  fill: ${theme.color[fill] || fill};
`;

export const size = (theme: RktaTheme, props: Props): SerializedStyles => {
  const { size: sizeValue } = props;
  return css`
    height: ${sizeValue}px;
    width: ${sizeValue}px;
  `;
};
