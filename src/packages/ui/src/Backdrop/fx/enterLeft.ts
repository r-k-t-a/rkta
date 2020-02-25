import { css, keyframes, SerializedStyles } from '@emotion/core';

const Keyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(-88px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;
export const enterLeft: SerializedStyles = css`
  animation: ${Keyframes} 0.64s ease forwards;
  will-change: opacity, transform;
`;
