import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm feeling more confident using React!
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello brave new world!
        </a>
      </header>
    </div>
  );
}

export default App;
