import React from 'react';
import { Route } from 'react-router-dom';

import Provider from '@rkta/ui/Provider';
import Text from '@rkta/ui/Text';
import RktaButtons from './Buttons';
import RktaPapers from './Papers';
import RktaFonts from './Fonts';

export default () => (
  <Provider>
    <Text sans>
      <Route path="/rkta/buttons" exact component={RktaButtons} />
      <Route path="/rkta/papers" exact component={RktaPapers} />
      <Route path="/rkta/fonts" exact component={RktaFonts} />
    </Text>
  </Provider>
);
