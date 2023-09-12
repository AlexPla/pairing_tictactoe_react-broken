import styled from 'styled-components'
import usePortal from '../../hooks/usePortal'
import { Cell } from '../../types'
import { Modal } from '../Modal/Modal'

const Container = styled.div`
  min-width: 20rem;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`

const Message = styled.div`
  font-size: 2rem;
`

const Player = styled.strong`
  padding: 0.5rem;
  margin-right: 1rem;
  background-color: var(--primary-color);
  border-radius: 0.25rem;
  color: var(--background-color);
  line-height: 1rem;
`

type Props = {
  winner: Cell
}

export const GameOverModal = ({ winner }: Props) => {
  const Portal = usePortal()
  return (
    <Portal>
      <Modal>
        <Container>
          <Message>
            <Player>{winner}</Player> has won!!!
          </Message>
        </Container>
      </Modal>
    </Portal>
  )
}
