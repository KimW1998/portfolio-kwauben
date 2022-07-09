import React from 'react';
import './App.css';

import HeaderImage from './Components/headerImage';
import Body from './Body';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       
        <HeaderImage />
      </header>
<Body />
      <footer className="App-footer">


      </footer>
    </div>
  );        
}

export default App;
