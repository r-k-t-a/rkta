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
  animation: ${Keyframes} 0.64s cubic-bezier(0.23, 1, 0.32, 1) forwards;
`;
