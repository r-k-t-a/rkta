import React, { Fragment } from 'react';
import { Paper, Header } from 'rkta-ui';
import range from 'lodash/range';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <Header level={1}>RKTA-UI papers</Header>
    <Profiler id="rktaui-papers">
      {range(0, 5000).map(index => (
        <Paper key={index} warning>Paper {index}</Paper>
      ))}
    </Profiler>
  </Fragment>
);
