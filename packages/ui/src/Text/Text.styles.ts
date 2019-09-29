import { css } from '@emotion/core';
import { Color, CssEmotion, RktaTheme } from '../Provider/theme/theme.defs';

export const color = (theme: RktaTheme, props: { color: Color }): CssEmotion => css`
  color: ${theme.color[props.color] || props.color};
`;

export const sans: CssEmotion = css`
  font-family: 'San Francisco', 'Helvetica Neue', 'Roboto', 'Segoe UI', sans-serif;
`;

export const serif: CssEmotion = css`
  font-family: 'Playfair Display', Bookman, Palatino, Georgia, serif;
`;

export const monospace: CssEmotion = css`
  font-family: 'Lucida Sans Typewriter', 'Lucida Console', 'Consolas', 'Andale Mono', 'Monaco',
    'Courier New', Courier, monospace;
`;

export const uppercase: CssEmotion = css`
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

export const baseline: CssEmotion = css`
  margin: 0;
  padding: 0;
`;

export const muted: CssEmotion = css`
  opacity: 0.56;
  user-select: none;
`;

export const center: CssEmotion = css`
  text-align: center;
`;

export const etched: CssEmotion = css`
  text-shadow: 0 1px rgba(255, 255, 255, 0.24);
`;

export const readOnly: CssEmotion = css`
  pointer-events: none;
  user-select: none;
`;

export const nowrap: CssEmotion = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const wrapLongLines: CssEmotion = css`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const hyphens: CssEmotion = css`
  hyphens: auto;
`;

// size
export const h1: CssEmotion = css`
  font-size: 96px;
  font-weight: lighter;
  line-height: 96px;
  letter-spacing: -1.5px;
`;

export const h2: CssEmotion = css`
  font-size: 60px;
  font-weight: lighter;
  line-height: 60px;
  letter-spacing: -0.5px;
`;

export const h3: CssEmotion = css`
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
`;

export const h4: CssEmotion = css`
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.25px;
`;

export const h5: CssEmotion = css`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

export const h6: CssEmotion = css`
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
`;

export const subtitle1: CssEmotion = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const subtitle2: CssEmotion = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

export const body: CssEmotion = css`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 24px;
  text-rendering: optimizeLegibility;
`;

export const body2: CssEmotion = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

export const button: CssEmotion = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-decoration: none;
`;

export const caption: CssEmotion = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
`;

export const overline: CssEmotion = css`
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
`;
