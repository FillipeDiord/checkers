import React from 'react';
import { Board } from './components/gameBoard/Board';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { DndProvider } from 'react-dnd';
import './styles/app.css';

export function App() {

  return (
    <div className="game" id="app">
      <div className="game-board box">
        <div className="player player-one">
          <div className="player-title">Jogador</div>
          <div className="player-name">Beta</div>
        </div>

        <div className="board">
          <DndProvider backend={MultiBackend} options={HTML5toTouch}>
            <Board />
          </DndProvider >
        </div>

        <div className="player player-two">
          <div className="player-title">Jogador</div>
          <div className="player-name">Alfa</div>
        </div>
      </div>

      <div className="game-menu -config box">
        <div className="title">Configurações</div>
        <div className="subtitle">Jogador Alfa</div>
        <div className="subtitle">Jogador Beta</div>
      </div>

      <div className="game-menu -status box">
        <div className="title">Geral</div>
        <div className="containerButtonResetPieces">
          <button
            className="buttonResetPieces"
          >
            Reiniciar Peças
          </button>
        </div>
      </div>
    </div>
  );
}
