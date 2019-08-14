import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Rkta from './pages/rkta';
import RktaUi from './pages/rkta-ui';
import Material from './pages/material';
import Emotion from './pages/emotion';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/rkta" component={Rkta} />
      <Route path="/rkta-ui" component={RktaUi} />
      <Route path="/material" component={Material} />
      <Route path="/emotion" component={Emotion} />
    </Router>
  );
}

export default App;
