import { css, keyframes, SerializedStyles } from '@emotion/core';

const ModalTopLeave = keyframes`
  to {
    opacity: 0;
    transform: translateY(-160px);
  }
`;
export const modalTopLeave: SerializedStyles = css`
  animation: ${ModalTopLeave} 0.4s ease forwards;
  will-change: opacity, transform;
`;
