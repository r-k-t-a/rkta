import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { SvgProps } from './Svg.type';
import { cssUnitToString } from '../util';

export const initialStyle = css`
  fill: currentColor;
  vertical-align: middle;
`;

export const block = css`
  display: block;
`;

export const color = (theme: RktaTheme, { color: fill = '' }: SvgProps): SerializedStyles => css`
  fill: ${theme.color[fill] || fill};
`;

export const size = (theme: RktaTheme, props: SvgProps): SerializedStyles => {
  const value = cssUnitToString(props.size);
  return css`
    height: ${value};
    width: ${value};
  `;
};
