import { css, keyframes, SerializedStyles } from '@emotion/core';

const ModalRightEnter = keyframes`
  from {
    opacity: 0;
    transform: translateX(160px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
export const modalRightEnter: SerializedStyles = css`
  animation: ${ModalRightEnter} 0.64s ease forwards;
  will-change: opacity, transform;
`;
