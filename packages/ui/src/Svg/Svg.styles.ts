import { Color, CssRkta, RktaTheme } from '../Provider/theme/theme.d';

export const initialStyle: CssRkta = {
  fill: 'currentColor',
  verticalAlign: 'middle',
};

export const block: CssRkta = {
  display: 'block',
};

export const color = (theme: RktaTheme, props: { color: Color }): CssRkta => ({
  fill: theme.color[props.color] || props.color,
});

export const size = (theme: RktaTheme, props: { size: number }): CssRkta => {
  const { size: sizeValue } = props;
  return {
    height: sizeValue,
    width: sizeValue,
  };
};
