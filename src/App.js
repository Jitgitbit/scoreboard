import React from 'react';
import './App.css';
import Title from "./components/Title";
import SayHello from './components/SayHello';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <Title content="Some Simple Title For ScoreBoard" />
      <SayHello name="Diva"/>
      <Scoreboard/>
    </div>
  );
}


export default App;
