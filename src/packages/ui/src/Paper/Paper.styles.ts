import { css, SerializedStyles } from '@emotion/core';
import { invariant } from '../util/invariant';
import { RktaTheme } from '../Provider/theme';
import { PaperProps } from './Paper.type';
import { cssUnitToString } from '../util';

export const initialStyle = (theme: RktaTheme): SerializedStyles => css`
  border: 0px solid currentColor;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: ${theme.color.paper};
`;

export const bgColor = (
  theme: RktaTheme,
  { bgColor: color = '' }: PaperProps,
): SerializedStyles => css`
  background-color: ${theme.color[color] || color};
`;

export const clip = css`
  overflow: hidden;
`;

export const disabled = css`
  cursor: auto;
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

export const outline = (theme: RktaTheme, props: PaperProps): SerializedStyles => {
  const value = cssUnitToString(props.outline);
  return css`
    border-width: ${value};
  `;
};
export const outlineColor = (
  theme: RktaTheme,
  { outlineColor: borderColor = '' }: PaperProps,
): SerializedStyles => css`
  border-color: ${theme.color[borderColor] || borderColor};
`;

export const readOnly = css`
  cursor: auto;
  pointer-events: none;
`;

export const relative = css`
  position: relative;
`;

export const rize = (theme: RktaTheme, { rize: elevation = 0 }: PaperProps): SerializedStyles => {
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

export const size = (theme: RktaTheme, { size: rawSize }: PaperProps): SerializedStyles => {
  const cssSize = cssUnitToString(rawSize);
  return css`
    width: ${cssSize};
    height: ${cssSize};
  `;
};

export const transparent = css`
  background-color: transparent;
`;
