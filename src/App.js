import React from 'react';
import Lottery from './Lottery';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Lottery />
        <Lottery title='mini daily' maxBalls={10} numBalls={4} />
      </header>
    </div>
  );
}

export default App;
