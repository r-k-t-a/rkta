import { CssRkta, ThemeInterface } from '../Provider/theme/theme.d';
import { ButtonProps } from './Button.d';

export const initialStyle: CssRkta = {
  alignItems: 'center',
  height: 48,
  justifyContent: 'center',
  padding: '0 16px',
};

export const blockLevel: CssRkta = {
  display: 'flex',
  width: '100%',
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
  height: 64,
  padding: '0 32px',
};
export const big: CssRkta = {
  height: 56,
  padding: '0 24px',
};
export const small: CssRkta = {
  height: 40,
};
export const tiny: CssRkta = {
  height: 32,
};

export const outline = (theme: ThemeInterface, props: ButtonProps): CssRkta => ({
  borderWidth: props.outline || 1,
});

export const round = (theme: ThemeInterface, props: ButtonProps): CssRkta => ({
  borderRadius: props.size || 48,
  height: 48,
  width: 48,
  padding: 0,
});

export const size = (theme: ThemeInterface, props: ButtonProps): CssRkta => ({
  flexDirection: 'column',
  height: props.size,
  width: props.size,
});

// export const color = (theme: ThemeInterface, props: { color?: string }): CssRkta => ({
//   color: props.color ? theme.color[props.color] || props.color : 'inherit',
// });
