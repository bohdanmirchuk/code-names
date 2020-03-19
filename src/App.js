import React, { useState } from 'react';
import NewGame from './components/newGame/NewGame';
import './App.css';

const App = () => {

  const [newGame, setNewGame] = useState(false);
  const [gameId, setGameId] = useState(null);

  const handleClickNewGame = () => {
    let id = 'a' + (Math.floor(Math.random() * 10) + 1);
    setNewGame(true);
    setGameId(id);
  };

  if (newGame) {
    return (
      <div className="App">
        <NewGame gameId={gameId} setNewGame={setNewGame}/>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="app-name">Code names</header>
      <div className="nav-container">
        <div className="nav-button" onClick={handleClickNewGame}>Нова гра</div>
      </div>

    </div>
  );
}

export default App;
