import { css, keyframes, SerializedStyles } from '@emotion/core';

const Keyframes = keyframes`
  to {
    opacity: 0;
    transform: translateX(-88px);
  }
`;
export const leaveLeft: SerializedStyles = css`
  animation: ${Keyframes} 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  will-change: opacity, transform;
`;
