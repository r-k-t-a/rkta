import React from 'react';
import { Global, css, Interpolation } from '@emotion/core';

import { GlobalCssProps } from './GlobalCss.type';

export const GlobalCss = ({ body, links }: GlobalCssProps): JSX.Element => (
  <Global
    styles={({ color, Text }): Interpolation => [
      body && {
        body: {
          ...Text.body,
          ...Text.sans,
          backgroundColor: color.paper,
          color: color.text,
          margin: 0,
          overscrollBehavior: 'none',
        },
      },
      links &&
        css`
          a {
            color: ${color.link};
            &:hover {
              color: ${color.linkHover};
            }
            &:visited {
              color: ${color.linkVisited};
            }
          }
        `,
    ]}
  />
);
