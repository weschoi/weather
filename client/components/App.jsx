import React from 'react';
import Sexy from './Sexy.jsx';
import Nerdy from './Nerdy.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
      <div className="row">
        <Sexy />
        <Nerdy />
      </div>
    )
  }
}

export default App