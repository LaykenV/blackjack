import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import TitleScreen from './components/titleScreen/TitleScreen';
import GameScreen from './components/gameScreen/GameScreen';

function App() {
  const [credits, setCredits] = useState(0 as number);
  const [cards, setCards] = useState([] as any)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/play" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
