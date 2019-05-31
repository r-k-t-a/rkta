import { CssRkta, ThemeInterface } from '../Provider/theme/theme.types';

export const initialStyle = (theme: ThemeInterface): CssRkta => ({
  fontFamily: '"San Francisco", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  letterSpacing: '0.15px',
  lineHeight: '24px',
  textRendering: 'optimizeLegibility',
  textDecoration: 'none',
  color: theme.color.text,
});

export const color = (theme: ThemeInterface, props: { color?: string }): CssRkta => ({
  color: props.color ? theme.color[props.color] || props.color : 'inherit',
});

export const serif: CssRkta = {
  fontFamily: '"Playfair Display", Bookman, Palatino, Georgia, serif',
};

export const monospace: CssRkta = {
  fontFamily:
    '"Lucida Sans Typewriter", "Lucida Console", "Consolas", "Andale Mono", "Monaco", "Courier New", Courier, monospace',
};

export const uppercase: CssRkta = {
  textTransform: 'uppercase',
  letterSpacing: '0.75px',
};

export const baseline: CssRkta = {
  margin: 0,
  padding: 0,
};

export const muted: CssRkta = {
  opacity: 0.4,
  userSelect: 'none',
};

export const center: CssRkta = {
  textAlign: 'center',
};

export const etched: CssRkta = {
  textShadow: '0 1px rgba(255, 255, 255, 0.24)',
};

export const readOnly: CssRkta = {
  pointerEvents: 'none',
  userSelect: 'none',
};

export const nowrap: CssRkta = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

export const wrap: CssRkta = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
};

export const hyphens: CssRkta = {
  hyphens: 'auto',
};

// size
export const h1: CssRkta = {
  fontSize: '96px',
  fontWeight: 'lighter',
  lineHeight: '96px',
  letterSpacing: '-1.5px',
};

export const h2: CssRkta = {
  fontSize: '60px',
  fontWeight: 'lighter',
  lineHeight: '60px',
  letterSpacing: '-0.5px',
};

export const h3: CssRkta = {
  fontSize: '48px',
  fontWeight: 400,
  lineHeight: '48px',
};

export const h4: CssRkta = {
  fontSize: '34px',
  fontWeight: 400,
  lineHeight: '40px',
  letterSpacing: '0.25px',
};

export const h5: CssRkta = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px',
};

export const h6: CssRkta = {
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  letterSpacing: '0.15px',
};

export const subtitle1: CssRkta = {
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  letterSpacing: '0.15px',
};

export const subtitle2: CssRkta = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
};

export const body2: CssRkta = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.1px',
};

export const button: CssRkta = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
};

export const caption: CssRkta = {
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.4px',
};

export const overline: CssRkta = {
  fontSize: '10px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '1px',
};
