import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/rkta/buttons">Rkta Buttons</Link>
    <br/>
    <Link to="/rkta-ui/buttons">Rkta-ui Buttons</Link>
    <br/>
    <Link to="/material/buttons">Material Buttons</Link>
    <br />
    <br />
    <Link to="/rkta/papers">Rkta Papers</Link>
    <br/>
    <Link to="/rkta-ui/papers">Rkta-ui Papers</Link>
    <br/>
    <Link to="/material/papers">Material Papers</Link>
    <br />
    <Link to="/emotion/papers">Emotion Papers</Link>
    <br />
    <br />
    <Link to="/rkta/fonts">Rkta Texts</Link>
    <br/>
    <Link to="/rkta-ui/fonts">Rkta-ui Fonts</Link>
    <br/>
    <Link to="/material/fonts">Material Typography</Link>
    <br />
    <Link to="/emotion/fonts">Emotion Fonts</Link>
  </div>
);

export default Home;
