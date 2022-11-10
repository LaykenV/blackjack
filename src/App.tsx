import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TitleScreen from './components/titleScreen/TitleScreen';
import GameScreen from './components/gameScreen/GameScreen';

function App() {
  const [credits, setCredits] = useState(50 as number);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitleScreen credits={credits} setCredits={setCredits}/>} />
        <Route path="/play" element={<GameScreen credits={credits} setCredits={setCredits}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
