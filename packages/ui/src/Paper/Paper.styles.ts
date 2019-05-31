import { CssRkta, ThemeInterface } from '../Provider/theme/theme.types';

export const initialStyle = (theme: ThemeInterface): CssRkta => ({
  borderRadius: '3px',
  boxSizing: 'border-box',
  backgroundColor: theme.color.paper,
  position: 'relative',
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

export const rize = (theme: ThemeInterface, props: { rize: number }): CssRkta => {
  const { rize: rizeValue } = props;
  const blur: number = Math.max(rizeValue ** 3, 5);
  return {
    boxShadow: `
      0px ${rizeValue}px ${blur}px 0px rgba(0, 0, 0, 0.2),
      0px ${rizeValue * 2}px ${blur / 2}px 0px rgba(0, 0, 0, 0.14),
      0px ${rizeValue * 3}px ${blur / rizeValue}1px ${-rizeValue / 2}px rgba(0, 0, 0, 0.12)
    `,
  };
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
