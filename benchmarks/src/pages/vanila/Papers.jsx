import React, { Fragment } from 'react';
import range from 'lodash/range';
import { Header } from 'rkta-ui';

import Profiler from '../../blocks/Profiler';

const paperStyle = {
  borderRadius: '3px',
  boxSizing: 'border-box',
  backgroundColor: '#F36F1B',
};

export default () => (
  <Fragment>
    <Header level={1}>VANILA Papers</Header>
    <Profiler id="emotion-papers">
      {range(0, 10000).map(index => (
        <div key={index} style={paperStyle}>
          div (Paper vanila) {index}
        </div>
      ))}
    </Profiler>
  </Fragment>
);
