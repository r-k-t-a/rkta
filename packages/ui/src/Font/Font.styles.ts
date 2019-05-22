import {
  CssChunkType,
  ThemeInterface,
  ThemedComponentInterface,
} from '../Provider/theme/theme.types';

export function initialStyle(theme: ThemeInterface, props: ThemedComponentInterface): CssChunkType {
  const { color } = props;
  return {
    fontFamily: '"San Francisco", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0.15px',
    lineHeight: '24px',
    textRendering: 'optimizeLegibility',
    textDecoration: 'none',
    color: theme.color[color || 'text'],
  };
}

export const serif: CssChunkType = {
  fontFamily: '"Playfair Display", Bookman, Palatino, Georgia, serif',
};

export const monospace: CssChunkType = {
  fontFamily:
    '"Lucida Sans Typewriter", "Lucida Console", "Consolas", "Andale Mono", "Monaco", "Courier New", Courier, monospace',
};

export const uppercase: CssChunkType = {
  textTransform: 'uppercase',
  letterSpacing: '0.75px',
};

export const baseline: CssChunkType = {
  margin: 0,
  padding: 0,
};

export const muted: CssChunkType = {
  opacity: 0.4,
  userSelect: 'none',
};

export const center: CssChunkType = {
  textAlign: 'center',
};

export const etched: CssChunkType = {
  textShadow: '0 1px rgba(255, 255, 255, 0.24)',
};

export const noselect: CssChunkType = {
  userSelect: 'none',
};

export const nowrap: CssChunkType = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

export const wrap: CssChunkType = {
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
};

export const hyphens: CssChunkType = {
  hyphens: 'auto',
};

// size
export const h1: CssChunkType = {
  fontSize: '96px',
  fontWeight: 'lighter',
  lineHeight: '96px',
  letterSpacing: '-1.5px',
};

export const h2: CssChunkType = {
  fontSize: '60px',
  fontWeight: 'lighter',
  lineHeight: '60px',
  letterSpacing: '-0.5px',
};

export const h3: CssChunkType = {
  fontSize: '48px',
  fontWeight: 400,
  lineHeight: '48px',
};

export const h4: CssChunkType = {
  fontSize: '34px',
  fontWeight: 400,
  lineHeight: '40px',
  letterSpacing: '0.25px',
};

export const h5: CssChunkType = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '32px',
};

export const h6: CssChunkType = {
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  letterSpacing: '0.15px',
};

export const subtitle1: CssChunkType = {
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  letterSpacing: '0.15px',
};

export const subtitle2: CssChunkType = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
};

export const body2: CssChunkType = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.1px',
};

export const button: CssChunkType = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  letterSpacing: '0.1px',
};

export const caption: CssChunkType = {
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '0.4px',
};

export const overline: CssChunkType = {
  fontSize: '10px',
  lineHeight: '20px',
  fontWeight: 400,
  letterSpacing: '1px',
};
