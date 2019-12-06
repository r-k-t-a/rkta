import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const ModalTopLeave = keyframes`
  to {
    opacity: 0;
    transform: translateY(-160px);
  }
`;
export const modalTopLeave: CssEmotion = {
  animation: `${ModalTopLeave} 0.4s ease`,
  willChange: 'opacity, transform',
};
