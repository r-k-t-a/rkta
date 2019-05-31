import { CssRkta, ThemeInterface } from '../Provider/theme/theme.types';

export const initialStyle: CssRkta = {
  fill: 'currentColor',
  verticalAlign: 'middle',
};

export const block: CssRkta = {
  display: 'block',
};

export const color = (theme: ThemeInterface, props: { color: string }): CssRkta => ({
  fill: theme.color[props.color] || props.color,
});

export const size = (theme: ThemeInterface, props: { size: number }): CssRkta => {
  const { size: sizeValue } = props;
  return {
    height: sizeValue,
    width: sizeValue,
  };
};
