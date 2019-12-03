import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const ModalLeftEnter = keyframes`
  from {
    opacity: 0;
    transform: translateX(-160px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
export const modalLeftEnter: CssEmotion = {
  animation: `${ModalLeftEnter} 0.64s ease`,
  willChange: 'opacity, transform',
};
