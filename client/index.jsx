import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Sexy from './components/Sexy.jsx';
import Nerdy from './components/Nerdy.jsx';

// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(
  <div className="row">
    <Sexy />
    <Nerdy />
  </div>, 
  document.getElementById('app'));