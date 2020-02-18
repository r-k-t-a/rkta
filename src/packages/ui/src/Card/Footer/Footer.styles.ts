import { css } from '@emotion/core';

export const initialStyle = css`
  align-items: center;
  display: flex;
  padding: 8px;
  > * + * {
    margin-left: 8px;
  }
`;

export const right = css`
  justify-content: flex-end;
`;
