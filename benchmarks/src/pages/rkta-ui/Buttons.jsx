import React, { Fragment } from 'react';
import { Button, Header } from 'rkta-ui';
import range from 'lodash/range';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <Header level={1}>RKTA-UI buttons</Header>
    <Profiler id="rktaui-buttons">
      {range(0, 1000).map(index => (
        <Button key={index}>Button {index}</Button>
      ))}
    </Profiler>
  </Fragment>
);
