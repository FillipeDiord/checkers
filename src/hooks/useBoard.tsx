import { useState } from 'react';
import { TileClass } from '../components/tile/Tile';
import { PieceClass } from '../components/piece/Piece';
import { updateBoard, indexToCoordinates, movePiece } from '../util/gameLogic';
import { getRandMove, showMove } from '../util/dumbAI';
import { v4 as uuid } from 'uuid';

export interface GameState {
  playerTurn: 1 | 2
  winner: 1 | 2 | false
  tiles: TileClass[]
  numPieceOne: number
  numPieceTwo: number
  jumping: number | null
}

export function initialState() {
  const tiles: TileClass[] = [];

  for (let i = 0; i < 64; i++) {
    const [x, y] = indexToCoordinates(i);
    const piece = pieceExist(x, y);
    tiles.push({
      id: uuid(),
      index: i,
      black: (x + y) % 2 === 1,
      piece: piece,
      AIMoveTo: false
    })
  }

  const state: GameState = {
    playerTurn: 1,
    winner: false,
    tiles: tiles,
    numPieceOne: 8,
    numPieceTwo: 8,
    jumping: null
  }

  return updateBoard(state);

  function pieceExist(x: number, y: number): PieceClass | null {
    const piece: PieceClass = {
      player: 1,
      king: false,
      canDrag: [],
      hasJump: false,
      AISelected: false
    }

    if (y <= 1 && (x + y) % 2 === 1) {
      return { ...piece, player: 2 };
    }
    else if (y >= 6 && (x + y) % 2 === 1) {
      return piece;
    }
    else {
      return null;
    }
  }
}

export function useBoard(init = initialState()): [GameState, Function] {
  const [boardState, setBoardState] = useState(init);

  //handle AI's turn
  const handleAI = (state: GameState) => {
    setTimeout(() => {
      AIShowMove(state);
    }, 300);
  };

  //makes move for AI
  const AIMakeMove = (from: number, to: number, state: GameState) => {
    const newState = movePiece(from, to, state);
    newState.tiles[to].AIMoveTo = false;

    const piece = newState.tiles[to].piece
    if (piece) piece.AISelected = false;

    setBoardState(newState);
    if (newState.playerTurn === 2) handleAI(newState);
  };

  //update state to show AI's move
  const AIShowMove = (state: GameState) => {
    const [from, to] = getRandMove(state);
    if (from === -1 || to === -1) return;

    const newState = showMove(from, to, state);
    setBoardState(newState);
    setTimeout(() => {
      AIMakeMove(from, to, newState);
    }, 500)
  };

  const move: Function = (from: number, to: number) => {
    const newState = movePiece(from, to, boardState);
    setBoardState(newState);

    if (newState.playerTurn === 2) handleAI(newState);
  };

  return [boardState, move];

};