import React from 'react';
import ReactDOM from 'react-dom';
import Sexy from './components/Sexy.jsx';
import Nerdy from './components/Nerdy.jsx';

ReactDOM.render(
  <div className="row no-gutters">
    <Sexy />
    <Nerdy />
  </div>, 
  document.getElementById('app'));