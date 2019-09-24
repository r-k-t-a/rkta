import { keyframes } from '@emotion/core';
import { CssEmotion } from '../Provider/theme/theme.defs';

export const initialStyle: CssEmotion = {
  visibility: 'hidden',
};

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
export const popUp: CssEmotion = {
  animation: `${PopUp} 0.64s ease`,
  willChange: 'opacity, transform',
};

const FadeDown = keyframes`
  to {
    opacity: 0;
    transform: translateY(160px);
  }
`;
export const fadeDown: CssEmotion = {
  animation: `${FadeDown} 0.32s ease forwards`,
  willChange: 'opacity, transform',
};
