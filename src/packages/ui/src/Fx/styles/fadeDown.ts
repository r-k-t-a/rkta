import { css, keyframes } from '@emotion/core';

const FadeDown = keyframes`
  to {
    opacity: 0;
    transform: translateY(160px);
  }
`;
export const fadeDown = css`
  animation: ${FadeDown} 0.32s ease forwards;
  will-change: opacity, transform;
`;
