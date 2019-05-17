import { ThemeInterface } from '../Provider/theme/types';
import { CssType } from '../util/themedTypes';
import { FontProps } from './types';

function initialStyles(theme: ThemeInterface, props: FontProps): CssType {
  const { color, getColor } = props;
  return {
    fontFamily: '"San Francisco", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '0.15px',
    lineHeight: '24px',
    textRendering: 'optimizeLegibility',
    textDecoration: 'none',
    color: getColor(color),
  };
}

export default {
  initialStyles,
  serif: {
    fontFamily: '"Playfair Display", Bookman, Palatino, Georgia, serif',
  },
  monospace: {
    fontFamily:
      '"Lucida Sans Typewriter", "Lucida Console", "Consolas", "Andale Mono", "Monaco", "Courier New", Courier, monospace',
  },

  uppercase: {
    textTransform: 'uppercase',
    letterSpacing: '0.75px',
  },
  baseline: {
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  muted: {
    opacity: '0.4',
    userSelect: 'none',
  },
  center: {
    textAlign: 'center',
  },
  etched: {
    textShadow: '0 1px rgba(255, 255, 255, 0.24)',
  },
  noselect: { userSelect: 'none' },
  nowrap: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  wrap: {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  hyphens: { hyphens: 'auto' },
  textLeft: {
    textAlign: 'left',
  },

  // size
  h1: {
    fontSize: '96px',
    fontWeight: 'lighter',
    lineHeight: '96px',
    letterSpacing: '-1.5px',
  },
  h2: {
    fontSize: '60px',
    fontWeight: 'lighter',
    lineHeight: '60px',
    letterSpacing: '-0.5px',
  },
  h3: {
    fontSize: '48px',
    fontWeight: '400',
    lineHeight: '48px',
  },
  h4: {
    fontSize: '34px',
    fontWeight: '400',
    lineHeight: '40px',
    letterSpacing: '0.25px',
  },
  h5: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '32px',
  },
  h6: {
    fontSize: '22px',
    fontWeight: '500',
    lineHeight: '32px',
    letterSpacing: '0.15px',
  },
  subtitle1: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    letterSpacing: '0.15px',
  },
  subtitle2: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500',
    letterSpacing: '0.1px',
  },
  body2: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.1px',
  },
  button: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500',
    letterSpacing: '0.1px',
  },
  caption: {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.4px',
  },
  overline: {
    fontSize: '10px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '1px',
  },
};
