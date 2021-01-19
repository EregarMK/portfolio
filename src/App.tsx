import React from 'react';
import './App.css';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Timeline />
      <footer className='footer'>
        &copy;2021 Michał Kościanek
        <div className='footer-socials'>
          <a href='https://www.linkedin.com/in/micha%C5%82-ko%C5%9Bcianek-825661a2/' className='icon-linkedin icon' target='_blank' rel="noreferrer"> </a>
          <a href='https://github.com/EregarMK' className='icon-github icon' target='_blank' rel="noreferrer"> </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
