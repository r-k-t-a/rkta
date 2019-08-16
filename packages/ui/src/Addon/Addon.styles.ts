import { CssRkta, ThemeInterface } from '../Provider/theme/theme.defs';

export const initialStyle: CssRkta = {
  display: 'block',
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 16,
  paddingRight: 16,
};

export const big: CssRkta = {
  minHeight: 56,
};

export const fitAll: CssRkta = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
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

export const paddingX = (theme: ThemeInterface, props: { paddingX: number }): CssRkta => ({
  paddingLeft: props.paddingX,
  paddingRight: props.paddingX,
});

export const paddingY = (theme: ThemeInterface, props: { paddingY: number }): CssRkta => ({
  paddingTop: props.paddingY,
  paddingBottom: props.paddingY,
});

export const small: CssRkta = {
  minHeight: 40,
};

export const tiny: CssRkta = {
  minHeight: 32,
};
