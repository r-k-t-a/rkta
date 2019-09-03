import { keyframes } from '@emotion/core';
import { CssRkta } from '../Provider/theme/theme.defs';

const PopOver = keyframes`
  from {
    opacity: 0;
    transform: translateY(-160px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const popOver: CssRkta = {
  animation: `${PopOver} 0.64s ease`,
  willChange: 'opacity, transform',
};

const PopOut = keyframes`
  to {
    opacity: 0;
    transform: translateY(-160px);
  }
`;
export const popOut: CssRkta = {
  animation: `${PopOut} 0.4s ease`,
  willChange: 'opacity, transform',
};
