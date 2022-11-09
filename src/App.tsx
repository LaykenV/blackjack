import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TitleScreen from './components/titleScreen/TitleScreen';
import GameScreen from './components/gameScreen/GameScreen';

function App() {
  return (
    <div className="App">
      <TitleScreen />
      <GameScreen />
    </div>
  );
}

export default App;
