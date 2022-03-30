import './piecePlayerThwo.css';

export function PiecePlayerThwo() {
  
  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  return (
    <div
      id="drag1"
      draggable="true"
      onDragStart={(e) => drag(e)}
      className="piecePlayerThwo">
    </div>
  );
}