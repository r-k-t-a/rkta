import { Color, CssEmotion, RktaTheme } from '../Provider/theme';

export const color = (theme: RktaTheme, props: { color: Color }): CssEmotion => ({
  color: theme.color[props.color] || props.color,
});

export const sans: CssEmotion = {
  fontFamily: '"San Francisco", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif',
};

export const serif: CssEmotion = {
  fontFamily: '"Playfair Display", Bookman, Palatino, Georgia, serif',
};

export const monospace: CssEmotion = {
  fontFamily:
    '"Lucida Sans Typewriter", "Lucida Console", "Consolas", "Andale Mono", "Monaco", "Courier New", Courier, monospace',
};

export const uppercase: CssEmotion = {
  textTransform: 'uppercase',
  letterSpacing: '0.75px',
};

export const baseline: CssEmotion = {
  margin: 0,
  padding: 0,
};

export const muted: CssEmotion = {
  opacity: 0.56,
  userSelect: 'none',
};

export const center: CssEmotion = {
  textAlign: 'center',
};

export const etched: CssEmotion = {
  textShadow: '0 1px rgba(255, 255, 255, 0.24)',
};

export const readOnly: CssEmotion = {
  pointerEvents: 'none',
  userSelect: 'none',
};

export const nowrap: CssEmotion = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

export const wrapLongLines: CssEmotion = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
};

export const hyphens: CssEmotion = {
  hyphens: 'auto',
};

// size
export const h1: CssEmotion = {
  fontSize: '96px',
  fontWeight: 'lighter',
  lineHeight: '96px',
  letterSpacing: '-1.5px',
};

export const h2: CssEmotion = {
  fontSize: '60px',
  fontWeight: 'lighter',
  lineHeight: '60px',
  letterSpacing: '-0.5px',
};

export const h3: CssEmotion = {
  fontSize: '48px',
  fontWeight: 400,
  lineHeight: '48px',
};

export const h4: CssEmotion = {
  fontSize: '34px',
  fontWeight: 400,
  lineHeight: '40px',
  letterSpacing: '0.25px',
};

export const h5: CssEmotion = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px',
};

export const h6: CssEmotion = {
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  letterSpacing: '0.15px',
};

export const subtitle1: CssEmotion = {
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  letterSpacing: '0.15px',
};

export const subtitle2: CssEmotion = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
};

export const body: CssEmotion = {
  fontSize: '16px',
  fontWeight: 400,
  letterSpacing: '0.15px',
  lineHeight: '24px',
  textRendering: 'optimizeLegibility',
};

export const body2: CssEmotion = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.1px',
};

export const button: CssEmotion = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
  textDecoration: 'none',
};

export const caption: CssEmotion = {
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.4px',
};

export const overline: CssEmotion = {
  fontSize: '10px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '1px',
};
