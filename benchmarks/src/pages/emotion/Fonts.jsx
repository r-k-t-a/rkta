/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import range from 'lodash/range';

import { Header } from 'rkta-ui';
import Profiler from '../../blocks/Profiler';

const fontCss = [
  {
    color: '#FADC4F',
  },
];

export default () => (
  <Fragment>
    <Header level={1}>EMOTION Fonts</Header>
    <Profiler id="emotion-fonts">
      {range(0, 10000).map(index => (
        <span key={index} css={fontCss}>
          span (Font) {index}
        </span>
      ))}
    </Profiler>
  </Fragment>
);
