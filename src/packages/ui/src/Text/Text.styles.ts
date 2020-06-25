import { css, SerializedStyles } from '@emotion/core';
import { RktaTheme } from '../Provider/theme';
import { TextProps } from './Text.type';

export const color = (
  theme: RktaTheme,
  { color: textColor = '' }: TextProps,
): SerializedStyles => css`
  color: ${theme.color[textColor] || textColor};
`;

export const sans = css`
  font-family: 'San Francisco', 'Helvetica Neue', 'Roboto', 'Segoe UI', sans-serif;
`;

export const serif = css`
  font-family: 'Playfair Display', Bookman, Palatino, Georgia, serif;
`;

export const monospace = css`
  font-family: 'Lucida Sans Typewriter', 'Lucida Console', 'Consolas', 'Andale Mono', 'Monaco',
    'Courier New', Courier, monospace;
`;

export const uppercase = css`
  text-transform: uppercase;
  letter-spacing: 0.75px;
`;

export const baseline = css`
  margin: 0;
  padding: 0;
`;

export const muted = css`
  opacity: 0.56;
  user-select: none;
`;

export const center = css`
  text-align: center;
`;

export const etched = css`
  text-shadow: 0 1px rgba(255, 255 255, 0.24);
`;

export const readOnly = css`
  pointer-events: none;
  user-select: none;
`;

export const nowrap = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const wrapLongLines = css`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const hyphens = css`
  hyphens: auto;
`;

// size
export const h1 = css`
  font-size: 96px;
  font-weight: lighter;
  line-height: 96px;
  letter-spacing: -1.5px;
`;

export const h2 = css`
  font-size: 60px;
  font-weight: lighter;
  line-height: 60px;
  letter-spacing: -0.5px;
`;

export const h3 = css`
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
`;

export const h4 = css`
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0.25px;
`;

export const h5 = css`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

export const h6 = css`
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
`;

export const subtitle1 = css`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 24px;
`;

export const subtitle2 = css`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 20px;
`;

export const body = css`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 24px;
  text-rendering: optimizeLegibility;
`;

export const body2 = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.1px;
`;

export const button = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
  text-decoration: none;
`;

export const caption = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
`;

export const overline = css`
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
`;
