import { CssRkta, ThemeInterface } from '../Provider/theme/theme.types';

export const initialStyle: CssRkta = {
  verticalAlign: 'middle',
};

export const color = (theme: ThemeInterface, props: { color?: string }): CssRkta => ({
  fill: props.color ? theme.color[props.color] || props.color : 'currentColor',
});

export const size = (theme: ThemeInterface, props: { size: number }): CssRkta => {
  const { size: sizeValue } = props;
  return {
    height: sizeValue,
    width: sizeValue,
  };
};

export const block: CssRkta = {
  display: 'block',
};
