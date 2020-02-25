import { css, keyframes, SerializedStyles } from '@emotion/core';

const Keyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(160px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
export const enterBottom: SerializedStyles = css`
  animation: ${Keyframes} 0.64s ease forwards;
  will-change: opacity, transform;
`;
