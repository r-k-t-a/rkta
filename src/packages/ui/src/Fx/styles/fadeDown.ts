import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme';

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
