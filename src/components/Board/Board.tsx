import styled from 'styled-components'
import { Cell as CellType } from '../../types'
import { Cell } from '../'

const Container = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  width: 600px;
  height: 600px;
  border: 8px solid var(--primary-color);
  border-radius: 1rem;
`

type Props = {
  cells: CellType[]
  handleClickCell: (index: number) => void
}

export const Board = ({ cells, handleClickCell }: Props) => {
  return (
    <Container>
      {cells.map((value, index) => (
        <Cell
          key={`cell-${index}`}
          testId={`cell-${index}`}
          value={value}
          handleClick={() => handleClickCell(index)}
        />
      ))}
    </Container>
  )
}
