import { CssRkta } from '../Provider/theme/theme.types';

export const initialStyle: CssRkta = {
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  outline: 'none',
  padding: 0,
  position: 'relative',
};

export const busy: CssRkta = {
  color: 'transparent',
  '> *': {
    visibility: 'hidden',
  },
};
