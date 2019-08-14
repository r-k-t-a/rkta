import React from 'react';
import { Route } from 'react-router-dom';

import { Font, Provider } from 'rkta-ui';
import EmotionFonts from './Fonts';
import EmotionPapers from './Papers';

export default () => (
  <Provider>
    <Font>
      <Route path="/emotion/fonts" exact component={EmotionFonts} />
      <Route path="/emotion/papers" exact component={EmotionPapers} />
    </Font>
  </Provider>
);
