import { css, keyframes } from '@emotion/core';

const PopUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(160px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const popUp = css`
  animation: ${PopUp} 0.64s ease;
  will-change: opacity, transform;
`;
