import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const ModalBottomLeave = keyframes`
  to {
    opacity: 0;
    transform: translateY(160px);
  }
`;
export const modalBottomLeave: CssEmotion = {
  animation: `${ModalBottomLeave} 0.4s ease`,
  willChange: 'opacity, transform',
};
