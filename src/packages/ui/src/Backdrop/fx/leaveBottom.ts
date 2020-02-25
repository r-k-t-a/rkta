import { css, keyframes, SerializedStyles } from '@emotion/core';

const Keyframes = keyframes`
  to {
    opacity: 0;
    transform: translateY(88px);
  }
`;
export const leaveBottom: SerializedStyles = css`
  animation: ${Keyframes} 0.4s ease forwards;
  will-change: opacity, transform;
`;
