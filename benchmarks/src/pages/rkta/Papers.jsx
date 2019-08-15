import React, { Fragment } from 'react';
import Paper from '@rkta/ui/Paper';
import range from 'lodash/range';
import Heading from '@rkta/ui/Heading';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <Heading level={1}>RKTA Papers</Heading>
    <Profiler id="rkta-papers">
      {range(0, 5000).map(index => (
        <Paper key={index} bgColor="warning">
          Paper {index}
        </Paper>
      ))}
    </Profiler>
  </Fragment>
);
