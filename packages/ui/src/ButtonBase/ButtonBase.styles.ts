import { css } from '@emotion/core';

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

export const spinnerCss: CssRkta = css`
  align-content: center;
  display: flex;
  justify-content: center;
  position: absolute;
  visibility: visible !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
