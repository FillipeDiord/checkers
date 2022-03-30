import './gameBoard.css';
import { PiecePlayerOne } from '../piecePlayerOne/PiecePlayerOne';
import { PiecePlayerThwo } from '../piecePlayerThwo/PiecePlayerThwo';

export function GameBoard() {

  function allowDrop(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  return (
    <table>
      <caption className="titleGameBoard"><h1>Jogador BETA</h1></caption>
      <tbody>
        <tr>
          <td className="noPieceHere"></td>
          <td
            id="div1"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div2"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div3"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div4"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
        </tr>
        <tr>
          <td
            id="div5"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div6"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div7"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div8"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerOne />
          </td>
          <td className="noPieceHere"></td>
        </tr>
        <tr>
          <td className="noPieceHere"></td>
          <td
            id="div9"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div10"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div11"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div12"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
        </tr>
        <tr>
          <td
            id="div12"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div13"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div14"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div15"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
        </tr>
        <tr>
          <td className="noPieceHere"></td>
          <td
            id="div16"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div17"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div18"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div19"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
        </tr>
        <tr>
          <td
            id="div20"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div21"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div22"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div23"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
          </td>
          <td className="noPieceHere"></td>
        </tr>
        <tr>
          <td className="noPieceHere"></td>
          <td
            id="div24"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div25"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div26"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div27"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
        </tr>
        <tr>
          <td
            id="div28"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div29"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div30"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
          <td className="noPieceHere"></td>
          <td
            id="div31"
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
          >
            <PiecePlayerThwo />
          </td>
          <td className="noPieceHere"></td>
        </tr>
      </tbody>

    </table>
  );
}