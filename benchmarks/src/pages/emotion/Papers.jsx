/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import range from 'lodash/range';
import {  Header } from 'rkta-ui';

import Profiler from '../../blocks/Profiler';

const paperCss = [
  {
    borderRadius: '3px',
    boxSizing: 'border-box',
    backgroundColor: '#FCFCFC',
  },
  {
    backgroundColor: '#F36F1B'
  }
];

export default () => (
  <Fragment>
    <Header level={1}>EMOTION Papers</Header>
    <Profiler id="emotion-papers">
      {range(0, 5000).map(index => (
        <div key={index} css={paperCss}>div (Paper) {index}</div>
      ))}
    </Profiler>
  </Fragment>
);
