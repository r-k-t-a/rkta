import { keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

const BackdropEnter = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.72);
  }
`;
export const backdropEnter: CssEmotion = {
  animation: `${BackdropEnter} 1.2s ease`,
  willChange: 'background-color',
};
