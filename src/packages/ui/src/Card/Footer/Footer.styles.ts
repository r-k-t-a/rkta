import { css } from '@emotion/core';

export const initialStyle = css`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 8px;
  > * + * {
    margin-left: 8px;
  }
`;

export const center = css`
  justify-content: center;
`;

export const flexEnd = css`
  justify-content: flex-end;
`;

export const spaceAround = css`
  justify-content: space-around;
`;

export const spaceBetween = css`
  justify-content: space-between;
`;

export const spaceEvenly = css`
  justify-content: space-evenly;
`;
