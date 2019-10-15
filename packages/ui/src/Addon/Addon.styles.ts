import { CssRkta, RktaTheme } from '../Provider/theme/theme.type';

export const initialStyle: CssRkta = {
  display: 'block',
  padding: '0 16px',
};

export const big: CssRkta = {
  minHeight: 56,
};

export const fitAll: CssRkta = {
  padding: 0,
};

export const fitLeft: CssRkta = {
  paddingLeft: 0,
};

export const fitRight: CssRkta = {
  paddingRight: 0,
};

export const huge: CssRkta = {
  minHeight: 64,
};

export const inset: CssRkta = {
  paddingLeft: 72,
};

export const main: CssRkta = {
  flex: 1,
};
export const normal: CssRkta = {
  minHeight: 48,
};

export const paddingX = (theme: RktaTheme, props: { paddingX: number }): CssRkta => ({
  paddingLeft: props.paddingX,
  paddingRight: props.paddingX,
});

export const paddingY = (theme: RktaTheme, props: { paddingY: number }): CssRkta => ({
  paddingTop: props.paddingY,
  paddingBottom: props.paddingY,
});

export const small: CssRkta = {
  minHeight: 40,
};

export const tiny: CssRkta = {
  minHeight: 32,
};
