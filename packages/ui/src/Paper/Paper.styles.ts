import invariant from '../util/invariant';
import { Color, CssEmotion, RktaTheme } from '../Provider/theme/theme.defs';

export const initialStyle = (theme: RktaTheme): CssEmotion => ({
  border: '0px solid currentColor',
  borderRadius: '3px',
  boxSizing: 'border-box',
  backgroundColor: theme.color.paper,
});

export const bgColor = (theme: RktaTheme, props: { bgColor: Color }): CssEmotion => ({
  backgroundColor: theme.color[props.bgColor] || props.bgColor,
});

export const clip: CssEmotion = {
  overflow: 'hidden',
};

export const disabled: CssEmotion = {
  opacity: 0.4,
  pointerEvents: 'none',
  userSelect: 'none',
};

export const hard: CssEmotion = {
  borderRadius: 0,
};

export const hardBottom: CssEmotion = {
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
};

export const hardLeft: CssEmotion = {
  borderBottomLeftRadius: '0',
  borderTopLeftRadius: '0',
};

export const hardTop: CssEmotion = {
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
};

export const hardRight: CssEmotion = {
  borderBottomRightRadius: '0',
  borderTopRightRadius: '0',
};

export const outline = (theme: RktaTheme, props: { outline: number }): CssEmotion => ({
  borderWidth: props.outline,
});
export const outlineColor = (theme: RktaTheme, props: { outlineColor: string }): CssEmotion => ({
  borderColor: theme.color[props.outlineColor] || props.outlineColor,
});

export const readOnly: CssEmotion = {
  pointerEvents: 'none',
};

export const relative: CssEmotion = {
  position: 'relative',
};

export const rize = (theme: RktaTheme, props: { rize: number }): CssEmotion => {
  const rizeBy = props.rize.toString();
  invariant(rizeBy in theme.shadow, `Key "${rizeBy}" does not exist in "theme.shadow".`);
  return { boxShadow: theme.shadow[rizeBy] };
};

export const round: CssEmotion = {
  borderRadius: '50%',
};

export const rounded: CssEmotion = {
  borderRadius: '9999vw',
};

export const size = (theme: RktaTheme, props: { size: number }): CssEmotion => ({
  width: props.size,
  height: props.size,
});

export const transparent: CssEmotion = {
  backgroundColor: 'transparent',
};
