import { CssRkta } from '../Provider/theme/theme.type';

export const initialStyle: CssRkta = {
  overflow: 'hidden',
  overflowScrolling: 'touch',
  scrollBehavior: 'smooth',
  WebkitOverflowScrolling: 'touch',
};

export const hideScrollbars: CssRkta = {
  scrollbarWidth: 'none',
  MsOverflowStyle: 'none',
  '::-webkit-scrollbar': { display: 'none' },
};

export const snap: CssRkta = {
  scrollSnapType: 'both mandatory',
  '> * ': {
    scrollSnapAlign: 'start',
  },
};

export const x: CssRkta = {
  display: 'flex',
  overflowX: 'scroll',
};

export const y: CssRkta = {
  overflowY: 'scroll',
};
