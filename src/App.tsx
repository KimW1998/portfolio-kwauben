import React from 'react';
import './css/App.css';
import './css/Header.css';
import './css/AboutMe.css';
import './css/ServiceCard.css';
import './css/Skills.css';
import './css/MyWorkBox.css';
import './css/LivingRawBoutique.css';
import './css/Contact.css';
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
<h1 className='test-tekst'>Created by kim wauben</h1>
      </footer>
    </div>
  );        
}

export default App;
