import { css, keyframes, SerializedStyles } from '@emotion/core';

const ModalLeftEnter = keyframes`
  from {
    opacity: 0;
    transform: translateX(-160px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
export const modalLeftEnter: SerializedStyles = css`
  animation: ${ModalLeftEnter} 0.64s ease forwards;
  will-change: opacity, transform;
`;
