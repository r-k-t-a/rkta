import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const ModalRightLeave = keyframes`
  to {
    opacity: 0;
    transform: translateX(160px);
  }
`;
export const modalRightLeave: CssEmotion = {
  animation: `${ModalRightLeave} 0.4s ease`,
  willChange: 'opacity, transform',
};
