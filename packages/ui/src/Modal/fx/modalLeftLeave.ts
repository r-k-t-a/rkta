import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const ModalLeftLeave = keyframes`
  to {
    opacity: 0;
    transform: translateX(-160px);
  }
`;
export const modalLeftLeave: CssEmotion = {
  animation: `${ModalLeftLeave} 0.4s ease`,
  willChange: 'opacity, transform',
};
