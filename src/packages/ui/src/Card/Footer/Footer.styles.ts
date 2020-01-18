import { css } from '@emotion/core';

export const initialStyle = css`
  align-items: center;
  display: flex;
  padding: 8;
  > * + * {
    margin-left: 8;
  }
`;

export const right = css`
  justify-content: flex-end;
`;
