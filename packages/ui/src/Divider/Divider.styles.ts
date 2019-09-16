import { CssRkta, ThemeInterface } from '../Provider/theme/theme.defs';
import { DividerProps } from './Divider.defs';

export function initialStyle(theme: ThemeInterface): CssRkta {
  return {
    border: '0',
    height: '0',
    borderTop: `1px solid ${theme.color.divider}`,
    marginBottom: '8px',
    marginTop: '8px',
  };
}

export const dotted: CssRkta = {
  borderStyle: 'dotted',
};

export const fitAll: CssRkta = {
  margin: 0,
};

export const fitBottom: CssRkta = {
  marginBottom: 0,
};

export const fitTop: CssRkta = {
  marginTop: 0,
};

export const inset: CssRkta = {
  marginLeft: '72px',
};

export const invisible: CssRkta = {
  visibility: 'hidden',
};

export const size = (theme: ThemeInterface, props: DividerProps): CssRkta => ({
  marginBottom: props.size,
  marginTop: props.size,
});
