import { css } from '@emotion/core';

export const initialStyle = css`
  > dt {
    margin-bottom: 1px;
    &.active .chevron {
      transform: rotate(180deg);
    }
  }
  .chevron {
    transition: transform 0.24s ease;
    will-change: transition;
  }
`;
