import React from 'react';
import logo from './logo.svg';
import './App.css';

import Saga from './components/Saga';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saga />
        <Weather />
      </header>
    </div>
  );
}

export default App;
