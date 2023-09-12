import styled from 'styled-components'
import { Cell as CellType } from '../../types'

const Container = styled.div`
  border: 8px solid var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  font-weight: bold;
  cursor: pointer;
`

type Props = {
  testId?: string
  value: CellType
  handleClick: () => void
}

export const Cell = ({ testId, value, handleClick }: Props) => (
  <Container data-testid={testId} onClick={handleClick}>
    {value}
  </Container>
)
