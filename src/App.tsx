import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Board, GameOverModal } from './components'
import { useTicTacToe } from './hooks/useTicTacToe'

const Title = styled.h1`
  font-size: 4rem;
`

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Turn = styled.p`
  font-size: 2rem;
`

export const App = () => {
  const { cells, currentPlayer, isGameOver, winner, handleClickCell } =
    useTicTacToe()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isGameOver) {
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
  }, [isGameOver])

  return (
    <Container>
      <Title>Tic-tac-toe</Title>
      <Turn>
        Next move: <strong>{currentPlayer}</strong>
      </Turn>
      <Board cells={cells} handleClickCell={handleClickCell} />
      {isModalOpen && <GameOverModal winner={winner} />}
    </Container>
  )
}
