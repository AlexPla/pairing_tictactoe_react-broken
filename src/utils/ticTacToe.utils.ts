import { Cell, Player } from '../types'

export const checkColumn = (index: number, newCells: Cell[]): boolean =>
  !!newCells[index] &&
  newCells[index] === newCells[(index + 3) % 9] &&
  newCells[index] === newCells[(index + 6) % 9]

export const checkRow = (index: number, newCells: Cell[]): boolean => {
  const row = Math.floor(index / 3)
  return (
    !!newCells[index] &&
    newCells[row * 3 + (index % 3)] === newCells[row * 3 + ((index + 1) % 3)] &&
    newCells[row * 3 + (index % 3)] === newCells[row * 3 + ((index + 2) % 3)]
  )
}

export const checkDiagonals = (index: number, newCells: Cell[]): boolean =>
  !(index % 2) &&
  ((!!newCells[0] &&
    newCells[0] === newCells[4] &&
    newCells[0] === newCells[8]) ||
    (!!newCells[2] &&
      newCells[2] === newCells[4] &&
      newCells[2] === newCells[6]))

export const isBoardFull = (newCells: Cell[]): boolean =>
  !newCells.some((cell) => !cell)

export const getWinner = (
  index: number,
  cells: Cell[],
  currentPlayer: Player,
): Cell => {
  if (
    checkColumn(index, cells) ||
    checkRow(index, cells) ||
    checkDiagonals(index, cells)
  ) {
    return currentPlayer
  }
  return undefined
}
