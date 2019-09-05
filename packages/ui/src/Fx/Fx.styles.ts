import { keyframes } from '@emotion/core';
import { CssRkta } from '../Provider/theme/theme.defs';

const PopUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(160px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const popUp: CssRkta = {
  animation: `${PopUp} 2.64s ease`,
  willChange: 'opacity, transform',
};

const FadeDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(160px);
  }
`;
export const fadeDown: CssRkta = {
  animation: `${FadeDown} 2.4s ease`,
  willChange: 'opacity, transform',
};
