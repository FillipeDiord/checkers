import { GameBoard } from './components/gameBoard/GameBoard';
import './styles/global.css';

export function App() {
  return (
    <div className="containerApp">
      <div className="gameBoard">
        <div>
          <h1>Jogador BETA</h1>
        </div>
        <GameBoard />
        <div>
          <h1>Jogador ALFA</h1>
        </div>
      </div>
      <div className="styleSettings">
        <h2>Configurações de Estilo</h2>
        <h3>Jogador ALFA</h3>
        <h4>Cor das peças</h4>
        <h3>Jogador BETA</h3>
        <h4>Cor das peças</h4>
      </div>
      <div className="general">
        <h2>Geral</h2>
        <div className="containerButtonResetPieces">
          <button className="buttonResetPieces">
            Reiniciar Peças
          </button>
        </div>
      </div>
    </div>
  );
}
