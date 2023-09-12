import { Cells, Player } from '../../types'
import { checkColumn, checkRow, getWinner } from '../ticTacToe.utils'

const mockedCols = [
  { colIndex: 0, name: 'first' },
  { colIndex: 1, name: 'second' },
  { colIndex: 2, name: 'third' },
]
const mockedRows = [
  { rowIndex: 0, name: 'first' },
  { rowIndex: 1, name: 'second' },
  { rowIndex: 2, name: 'third' },
]
let mockedCells: Cells

describe('checkColumn', () => {
  it('should return false if index cell is undefined', () => {
    mockedCells = new Array(9).fill(undefined) as Cells
    const result = checkColumn(0, mockedCells)
    expect(result).toBe(false)
  })
  describe.each(mockedCols)('$name column', ({ colIndex }) => {
    describe.each(mockedRows)(
      'index is from $name row cell',
      ({ rowIndex }) => {
        const index = colIndex + rowIndex * 3
        it('should return true if column has 3 equal symbols', () => {
          mockedCells = new Array(9).fill(undefined) as Cells
          mockedCells[colIndex] = 'X'
          mockedCells[colIndex + 3] = 'X'
          mockedCells[colIndex + 6] = 'X'
          const result = checkColumn(index, mockedCells)
          expect(result).toBe(true)
        })
        it('should return false if column does not have 3 equal symbols', () => {
          mockedCells = new Array(9).fill(undefined) as Cells
          mockedCells[colIndex] = 'X'
          mockedCells[colIndex + 3] = 'O'
          mockedCells[colIndex + 6] = undefined
          const result = checkColumn(index, mockedCells)
          expect(result).toBe(false)
        })
      },
    )
  })
})

describe('checkRow', () => {
  it('should return false if index cell is undefined', () => {
    mockedCells = new Array(9).fill(undefined) as Cells
    const result = checkRow(0, mockedCells)
    expect(result).toBe(false)
  })
  describe.each(mockedRows)('$name column', ({ rowIndex }) => {
    describe.each(mockedCols)(
      'index is from $name column cell',
      ({ colIndex }) => {
        const index = rowIndex * 3 + colIndex
        it('should return true if column has 3 equal symbols', () => {
          mockedCells = new Array(9).fill(undefined) as Cells
          mockedCells[rowIndex * 3] = 'X'
          mockedCells[rowIndex * 3 + 1] = 'X'
          mockedCells[rowIndex * 3 + 2] = 'X'
          const result = checkRow(index, mockedCells)
          expect(result).toBe(true)
        })
        it('should return false if column does not have 3 equal symbols', () => {
          mockedCells = new Array(9).fill(undefined) as Cells
          mockedCells[rowIndex * 3] = 'X'
          mockedCells[rowIndex * 3 + 1] = 'O'
          mockedCells[rowIndex * 3 + 2] = undefined
          const result = checkRow(index, mockedCells)
          expect(result).toBe(false)
        })
      },
    )
  })
})

describe('getWinner', () => {
  describe.each(['X', 'O'] as Player[])(
    'currentPlayer is %s',
    (currentPlayer) => {
      describe('one of check methods returns true', () => {
        it.each([
          { elements: [0, 3, 6], checkMethod: checkColumn },
          { elements: [0, 1, 2], checkMethod: checkRow },
        ])(
          'should return true if $checkMethod returns true',
          ({ elements, checkMethod }) => {
            mockedCells = new Array(9).fill(undefined) as Cells
            elements.forEach((index) => (mockedCells[index] = currentPlayer))
            expect(checkMethod(0, mockedCells)).toBe(true)
            const result = getWinner(0, mockedCells, currentPlayer)
            expect(result).toBe(currentPlayer)
          },
        )
      })
      describe('all check methods return false', () => {
        it('should return undefined', () => {
          mockedCells = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'X', 'O']
          const result = getWinner(0, mockedCells, currentPlayer)
          expect(result).toBe(undefined)
        })
      })
    },
  )
})
