import { CssRkta, ThemeInterface } from '../Provider/theme/theme.types';

export function initialStyle(theme: ThemeInterface): CssRkta {
  return {
    border: '0',
    height: '0',
    borderTop: `1px solid ${theme.color.divider}`,
  };
}

export const dotted: CssRkta = {
  borderStyle: 'dotted',
};

export const baseline: CssRkta = {
  margin: 0,
  padding: 0,
};

export const inset: CssRkta = {
  marginLeft: '72px',
};

export const invisible: CssRkta = {
  visibility: 'hidden',
};
