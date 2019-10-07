import { Color, CssEmotion, CssRkta, RktaTheme } from '../Provider/theme/theme.d';
import Button from './Button.d';

export const initialStyle: CssEmotion = {
  alignItems: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  justifyContent: 'center',
  display: 'inline-flex',
  outline: 'none',
  position: 'relative',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  '&:active, &:hover, &:visited': {
    color: 'currentColor',
  },
  '> *': {
    pointerEvents: 'none',
  },
};

export const blockLevel: CssEmotion = {
  display: 'flex',
  width: '100%',
};

export const busy: CssEmotion = {
  fontSize: 0,
  '> *': {
    visibility: 'hidden',
  },
};

export const color = (theme: RktaTheme, props: { color: Color }): CssRkta => {
  const cssColor = theme.color[props.color] || props.color;
  return {
    color: cssColor,
    '&:active, &:hover, &:visited': {
      color: cssColor,
    },
  };
};

export const round = (theme: RktaTheme, props: Button): CssEmotion => {
  const size = props.size || 48;
  return {
    borderRadius: size,
    height: size,
    minHeight: size,
    width: size,
    padding: 0,
  };
};

export const size = (theme: RktaTheme, props: Button): CssEmotion => ({
  flexDirection: 'column',
  height: props.size,
  minHeight: props.size,
  width: props.size,
});

export const spinnerCss: {} = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  visibility: 'visible !important',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
