import './App.css';
import React from 'react';
import CcomponentText from './CcomponentText';
import CcomponentLink from './CcomponentLink';
import FcomponentLogo from './FcomponentLogo';
import FcomponentText from './FcomponentText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FcomponentText/>
        <FcomponentLogo/>
        <CcomponentText/>
        <CcomponentLink/>
      </header>
    </div>
  );
}

export default App;
