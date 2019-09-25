import { CssEmotion, RktaTheme } from '../Provider/theme/theme.defs';
import { ButtonProps } from './Button.defs';

export const initialStyle: CssEmotion = {
  alignItems: 'center',
  border: '0px solid currentColor',
  boxSizing: 'border-box',
  cursor: 'pointer',
  justifyContent: 'center',
  display: 'inline-flex',
  outline: 'none',
  position: 'relative',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
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

export const outline = (theme: RktaTheme, props: ButtonProps): CssEmotion => ({
  borderWidth: props.outline || 1,
});

export const round = (theme: RktaTheme, props: ButtonProps): CssEmotion => {
  const size = props.size || 48;
  return {
    borderRadius: size,
    height: size,
    minHeight: size,
    width: size,
    padding: 0,
  };
};

export const size = (theme: RktaTheme, props: ButtonProps): CssEmotion => ({
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
