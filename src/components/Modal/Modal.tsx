import { ReactNode } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`

const Container = styled.div`
  background-color: var(--background-color);
  border-radius: 1rem;
`

type Props = {
  children: ReactNode
}

export const Modal = ({ children }: Props) => {
  return (
    <Overlay>
      <Container>{children}</Container>
    </Overlay>
  )
}
