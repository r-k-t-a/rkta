import React from 'react';
import Button from '@material-ui/core/Button';
import range from 'lodash/range';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Profiler id="rkta-buttons">
    {range(0, 500).map(index => (
      <Button key={index}>Button {index}</Button>
    ))}
  </Profiler>
);
