import './piecePlayerOne.css';

export function PiecePlayerOne() {

  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  return (
    <div
      id='drag1'
      draggable="true"
      onDragStart={(e) => drag(e)}
      className="piecePlayerOne">
    </div>
  );
}