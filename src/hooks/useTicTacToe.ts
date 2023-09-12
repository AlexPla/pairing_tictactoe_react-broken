import { useEffect, useState } from 'react'
import { Cell, Cells, Player } from '../types'
import { getWinner } from '../utils/ticTacToe.utils'

const INITIAL_CELLS = new Array(9).fill(undefined) as Cells

export const useTicTacToe = () => {
  const [cells, setCells] = useState<Cells>(INITIAL_CELLS)
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [isGameOver, setIsGameOver] = useState(false)
  const [winner, setWinner] = useState<Cell>(undefined)

  const nextTurn = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  const checkWin = (index: number, newCells: Cells) => {
    const newWinner = getWinner(index, newCells, currentPlayer)
    if (newWinner) return setWinner(newWinner)
    nextTurn()
  }

  const handleClickCell = (index: number) => {
    if (!winner && !cells[index]) {
      const newCells: Cells = [...cells]
      newCells[index] = currentPlayer
      setCells(newCells)
      checkWin(index, newCells)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsGameOver(!!winner)
  })

  return { cells, currentPlayer, isGameOver, winner, handleClickCell }
}
