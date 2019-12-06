import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const ModalTopEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(-160px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const modalTopEnter: CssEmotion = {
  animation: `${ModalTopEnter} 0.64s ease`,
  willChange: 'opacity, transform',
};
