import { CssRkta } from '../Provider/theme/theme.d';

export const initialStyle: CssRkta = {
  border: '0px solid currentColor',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  outline: 'none',
  padding: 0,
  position: 'relative',
  userSelect: 'none',
  '> *': {
    pointerEvents: 'none',
  },
};

export const busy: CssRkta = {
  color: 'transparent',
  '> *': {
    visibility: 'hidden',
  },
};

export const spinnerCss: {} = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  visibility: 'visible !important',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
