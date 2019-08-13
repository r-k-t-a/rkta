import React from 'react';
import { Route } from 'react-router-dom';

import Provider from '@rkta/ui/Provider';
import Heading from '@rkta/ui/Heading';
import Text from '@rkta/ui/Text';
import RktaButtons from './Buttons';

export default () => (
  <Provider>
    <Text sans>
      <Heading level={1}>RKTA</Heading>
      <Route path="/rkta/buttons" exact component={RktaButtons} />
    </Text>
  </Provider>
);
