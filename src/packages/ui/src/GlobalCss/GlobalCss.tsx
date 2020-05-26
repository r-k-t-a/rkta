/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Global, css } from '@emotion/core';

import { Props } from './GlobalCss.type';

export const GlobalCss = ({ body, links }: Props): JSX.Element => (
  <Global
    styles={({ color, Text }): {} => [
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
