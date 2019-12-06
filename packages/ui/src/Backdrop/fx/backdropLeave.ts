import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const BackdropLeave = keyframes`
  to {
    background-color: rgba(0, 0, 0, 0);
  }
`;
export const backdropLeave: CssEmotion = {
  animation: `${BackdropLeave} 0.4s ease`,
  willChange: 'background-color',
};
