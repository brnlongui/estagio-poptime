import React from 'react';
//import api from './services/api';
import './styles.css';

import Header from './components/Header';
import Main from './pages/main/index';
const App = () => (
  <div className="App">
      <Header />
      <Main />
    </div>
);

export default App;