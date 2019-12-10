import { css, keyframes, SerializedStyles } from '@emotion/core';

const ModalBottomLeave = keyframes`
  to {
    opacity: 0;
    transform: translateY(160px);
  }
`;
export const modalBottomLeave: SerializedStyles = css`
  animation: ${ModalBottomLeave} 0.4s ease forwards;
  will-change: opacity, transform;
`;
