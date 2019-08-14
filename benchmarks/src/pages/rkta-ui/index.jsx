import React from 'react';
import { Route } from 'react-router-dom';

import { Font, Provider } from 'rkta-ui';
import RktaUiButtons from './Buttons';
import RktaUiPapers from './Papers';
import RktaUiFonts from './Fonts';

export default () => (
  <Provider>
    <Font sans>
      <Route path="/rkta-ui/buttons" exact component={RktaUiButtons} />
      <Route path="/rkta-ui/papers" exact component={RktaUiPapers} />
      <Route path="/rkta-ui/fonts" exact component={RktaUiFonts} />
    </Font>
  </Provider>
);
