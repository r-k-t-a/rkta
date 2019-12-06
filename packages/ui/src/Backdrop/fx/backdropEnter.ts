import { css, keyframes } from '@emotion/core';
import { CssEmotion } from '../../Provider/theme/theme.type';

export const backdropEnter: CssEmotion = () => {
  const BackdropEnter = keyframes`
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.72);
    }
  `;
  return css`
    :before {
      animation: ${BackdropEnter} 1.2s ease;
      will-change: background-color;
    }
  `;
};
