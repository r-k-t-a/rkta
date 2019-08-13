import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Rkta from './pages/rkta';
import Material from './pages/material';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/rkta" component={Rkta} />
      <Route path="/material" component={Material} />
    </Router>
  );
}

export default App;
