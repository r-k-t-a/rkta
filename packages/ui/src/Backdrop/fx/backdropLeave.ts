import { css, keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

export const backdropLeave: CssEmotion = () => {
  const BackdropLeave = keyframes`
    to {
      background-color: rgba(0, 0, 0, 0);
    }
  `;
  return css`
    :before {
      animation: ${BackdropLeave} 0.4s ease;
      will-change: background-color;
    }
  `;
};
