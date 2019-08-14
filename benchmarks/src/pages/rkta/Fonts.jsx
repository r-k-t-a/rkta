import React, { Fragment } from 'react';
import Text from '@rkta/ui/Text';
import range from 'lodash/range';
import Heading from '@rkta/ui/Heading';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <Heading level={1}>RKTA Fonts</Heading>
    <Profiler id="rkta-fonts">
      {range(0, 5000).map(index => (
        <Text key={index} color="primary">Text {index}</Text>
      ))}
    </Profiler>
  </Fragment>
);
