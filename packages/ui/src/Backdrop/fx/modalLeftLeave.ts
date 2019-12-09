import { css, keyframes, SerializedStyles } from '@emotion/core';

const ModalLeftLeave = keyframes`
  to {
    opacity: 0;
    transform: translateX(-160px);
  }
`;
export const modalLeftLeave: SerializedStyles = css`
  animation: ${ModalLeftLeave} 0.4s ease forwards;
  will-change: opacity, transform;
`;
