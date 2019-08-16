import React from 'react';
import { Route } from 'react-router-dom';

import { Font, Provider } from 'rkta-ui';
import VanilaPapers from './Papers';

export default () => (
  <Provider>
    <Font>
      <Route path="/vanila/papers" exact component={VanilaPapers} />
    </Font>
  </Provider>
);
