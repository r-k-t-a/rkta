import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import range from 'lodash/range';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <h1>Material buttons</h1>
    <Profiler id="rkta-buttons">
      {range(0, 1000).map(index => (
        <Button key={index}>Button {index}</Button>
      ))}
    </Profiler>
  </Fragment>
);
