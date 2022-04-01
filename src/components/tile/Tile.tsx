import React from 'react';
import { Piece } from '../piece/Piece';
import { PieceClass } from '../piece/Piece';
import { ItemTypes } from '../../constants/Constants';
import { useDrop } from 'react-dnd'

export interface TileClass {
  id?: string
  index: number
  black: boolean
  piece: PieceClass | null
  AIMoveTo: boolean
}

interface TileProps extends TileClass {
  move: Function
  size: number
}

export function Tile({ index, black, piece, AIMoveTo, move, size }: TileProps) {
  //drag and drop logic
  const [{ canDrop }, drop] = useDrop({
    accept: ItemTypes.PIECE,
    drop: () => ({ toIndex: index }),
    canDrop: (item, monitor) => {
      return monitor.getItem().canDrag.includes(index)
    },
    collect: monitor => ({
      canDrop: !!monitor.canDrop()
    })
  })

  //styling
  const tileColor = black ? '#BA7A3A' : 'rgb(238, 238, 238)';
  const statusColor = canDrop || AIMoveTo ? '#5C6BC0' : tileColor;
  const TileStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12.5%',
    height: '12.5%',
    backgroundColor: statusColor
  }

  return (
    <div data-testid='tile' style={TileStyle} ref={drop}>
      {piece ? <Piece player={piece.player} canDrag={piece.canDrag} hasJump={piece.hasJump}
        king={piece.king} AISelected={piece.AISelected} index={index} move={move} size={size} /> : ''}
    </div>
  )
};
