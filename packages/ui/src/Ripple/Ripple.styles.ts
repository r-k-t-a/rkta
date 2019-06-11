import { CssEmotion } from '../Provider/theme/theme.types';

export const RippleStyles: CssEmotion = {
  background: 'none',
  borderRadius: 'inherit',
  display: 'block',
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

export const getInnerRippleStyles = (highlight: boolean): CssEmotion => ({
  backgroundColor: 'currentColor',
  display: 'block',
  height: '100%',
  opacity: highlight ? 0.16 : 0,
  transition: 'opacity 0.48s ease',
  userSelect: 'none',
  width: '100%',
  willChange: 'opacity',
});
