import React from 'react';
import { Route } from 'react-router-dom';

import Buttons from './Buttons';

export default () => (
  <div>
    <h1>Material</h1>
    <Route path="/material/buttons" exact component={Buttons} />
  </div>
);
