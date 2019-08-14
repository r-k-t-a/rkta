import React from 'react';
import { Route } from 'react-router-dom';

import Buttons from './Buttons';
import Papers from './Papers';
import Fonts from './Fonts';

export default () => (
  <div>
    <Route path="/material/buttons" exact component={Buttons} />
    <Route path="/material/papers" exact component={Papers} />
    <Route path="/material/fonts" exact component={Fonts} />
  </div>
);
