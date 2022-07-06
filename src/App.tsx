import React from 'react';
import './App.css';
import NavigationBar from './Components/navigationBar';
import HeaderImage from './Components/headerImage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       
        <HeaderImage />
      </header>

      <footer className="App-footer">

<h1 className='test-tekst'>Portfolio Kim Wauben</h1>
      </footer>
    </div>
  );        
}

export default App;
