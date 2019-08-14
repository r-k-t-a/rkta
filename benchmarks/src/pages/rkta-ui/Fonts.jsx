import React, { Fragment } from 'react';
import { Font, Header } from 'rkta-ui';
import range from 'lodash/range';

import Profiler from '../../blocks/Profiler';

export default () => (
  <Fragment>
    <Header level={1}>RKTA-UI fonts</Header>
    <Profiler id="rktaui-fonts">
      {range(0, 5000).map(index => (
        <Font key={index} color="primary">Font {index}</Font>
      ))}
    </Profiler>
  </Fragment>
);
