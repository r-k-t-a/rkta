import { CssRkta, ThemeInterface } from '../Provider/theme/theme.defs';

export const initialStyle = (theme: ThemeInterface): CssRkta => ({
  borderRadius: '3px',
  boxSizing: 'border-box',
  backgroundColor: theme.color.paper,
});

export const bgColor = (theme: ThemeInterface, props: { bgColor: string }): CssRkta => ({
  backgroundColor: theme.color[props.bgColor] || props.bgColor,
});

export const clip: CssRkta = {
  overflow: 'hidden',
};

export const disabled: CssRkta = {
  opacity: 0.4,
  pointerEvents: 'none',
  userSelect: 'none',
};

export const hard: CssRkta = {
  borderRadius: 0,
};

export const hardBottom: CssRkta = {
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
};

export const hardLeft: CssRkta = {
  borderBottomLeftRadius: '0',
  borderTopLeftRadius: '0',
};

export const hardTop: CssRkta = {
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
};

export const hardRight: CssRkta = {
  borderBottomRightRadius: '0',
  borderTopRightRadius: '0',
};

export const readOnly: CssRkta = {
  pointerEvents: 'none',
};

export const relative: CssRkta = {
  position: 'relative',
};

export const rize = (theme: ThemeInterface, props: { rize: number }): CssRkta => {
  const { rize: propRize } = props;
  return theme.shadow[propRize] ? { boxShadow: theme.shadow[propRize] } : {};
};

export const round: CssRkta = {
  borderRadius: '50%',
};

export const rounded: CssRkta = {
  borderRadius: '9999vw',
};

export const size = (theme: ThemeInterface, props: { size: number }): CssRkta => ({
  width: props.size,
  height: props.size,
});

export const transparent: CssRkta = {
  backgroundColor: 'transparent',
};
