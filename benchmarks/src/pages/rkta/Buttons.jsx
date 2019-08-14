import React, { Fragment } from 'react';
import Button from '@rkta/ui/Button';
import range from 'lodash/range';
import Heading from '@rkta/ui/Heading';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <Heading level={1}>RKTA Buttons</Heading>
    <Profiler id="rkta-buttons">
      {range(0, 500).map(index => (
        <Button key={index}>Button {index}</Button>
      ))}
    </Profiler>
  </Fragment>
);
