import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import range from 'lodash/range';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <h1>Material Typography</h1>
    <Profiler id="rkta-fonts">
      {range(0, 5000).map(index => (
        <Typography color="primary" key={index}>Typography {index}</Typography>
      ))}
    </Profiler>
  </Fragment>
);
