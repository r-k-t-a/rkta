import { keyframes } from '@emotion/core';

import { CssEmotion, CssRkta } from '../Provider/theme/theme.types';

const wave = keyframes`
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
`;

const defaultCss = {
  animation: `${wave} 1.8s cubic-bezier(0.075, 0.820, 0.165, 1.000) forwards 1`,
  display: 'block',
  opacity: 0.24,
  position: 'absolute',
  transition: 'opacity 0.4s ease',
  willChange: 'opacity, transform',
};

// eslint-disable-next-line import/prefer-default-export
export const getStyle = (released?: boolean, css?: CssRkta): CssEmotion => {
  const nextCss = { ...defaultCss, ...(css as object) };
  if (released) nextCss.opacity = 0;
  return nextCss as CssEmotion;
};
