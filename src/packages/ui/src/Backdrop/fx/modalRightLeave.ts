import { css, keyframes, SerializedStyles } from '@emotion/core';

const ModalRightLeave = keyframes`
  to {
    opacity: 0;
    transform: translateX(160px);
  }
`;
export const modalRightLeave: SerializedStyles = css`
  animation: ${ModalRightLeave} 0.4s ease forwards;
  will-change: opacity, transforml;
`;
