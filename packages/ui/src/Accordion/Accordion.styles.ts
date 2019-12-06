import { css } from '@emotion/core';

export const initialStyle = css`
  > dt {
    margin-bottom: 1px;
    &.active .chevron {
      transform: rotate(180deg);
    }
  }
  > dd {
    margin: 0px;
  }
  .chevron {
    transition: transform 0.24s ease;
    will-change: transition;
  }
`;
