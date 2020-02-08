import { css, SerializedStyles } from '@emotion/core';
import { invariant } from '../util/invariant';
import { RktaTheme } from '../Provider/theme';
import { Props } from './Paper.type';

export const initialStyle = (theme: RktaTheme): SerializedStyles => css`
  border: 0px solid currentColor;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: ${theme.color.paper};
`;

export const bgColor = (theme: RktaTheme, { bgColor: color = '' }: Props): SerializedStyles => css`
  background-color: ${theme.color[color] || color};
`;

export const clip = css`
  overflow: hidden;
`;

export const disabled = css`
  opacity: 0.4;
  pointer-events: none;
  user-select: none;
`;

export const hard = css`
  border-radius: 0;
`;

export const hardBottom = css`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const hardLeft = css`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

export const hardTop = css`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const hardRight = css`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

export const outline = (theme: RktaTheme, props: Props): SerializedStyles => css`
  border-width: ${props.outline}px;
`;
export const outlineColor = (
  theme: RktaTheme,
  { outlineColor: borderColor = '' }: Props,
): SerializedStyles => css`
  border-color: ${theme.color[borderColor] || borderColor};
`;

export const readOnly = css`
  pointer-events: none;
`;

export const relative = css`
  position: relative;
`;

export const rize = (theme: RktaTheme, { rize: elevation = 0 }: Props): SerializedStyles => {
  const rizeBy = elevation.toString();
  invariant(rizeBy in theme.shadow, `Key "${rizeBy}" does not exist in "theme.shadow".`);
  return css`
    box-shadow: ${theme.shadow[rizeBy]};
  `;
};

export const round = css`
  border-radius: 50%;
`;

export const rounded = css`
  border-radius: 9999vw;
`;

export const size = (theme: RktaTheme, { size: rawSize }: Props): SerializedStyles => {
  const cssSize = typeof rawSize === 'number' ? `${rawSize}px` : rawSize;
  return css`
    width: ${cssSize}px;
    height: ${cssSize}px;
  `;
};

export const transparent = css`
  background-color: transparent;
`;
