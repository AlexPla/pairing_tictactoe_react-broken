import { within } from '@testing-library/react'
import { App } from './App'
import { render, fireEvent } from './test/testUtils'

describe('App', () => {
  it('should display an empty board', () => {
    const { getByText, getAllByTestId } = render(<App />)
    expect(getByText('Tic-tac-toe'))
    getAllByTestId(/cell/i).forEach((cell) => {
      expect(within(cell).queryByText('O')).not.toBeInTheDocument()
      expect(within(cell).queryByText('X')).not.toBeInTheDocument()
    })
  })

  describe('Moves', () => {
    it('should display next move player and switch it when that player performs a move', async () => {
      const { getByTestId, getByText } = render(<App />)
      const nextMoveMessage = getByText(/Next move/)
      expect(nextMoveMessage).toBeInTheDocument()
      expect(
        within(nextMoveMessage).getByText('X', { exact: true }),
      ).toBeInTheDocument()
      fireEvent.click(getByTestId('cell-0'))
      expect(
        await within(nextMoveMessage).findByText('O', { exact: true }),
      ).toBeInTheDocument()
    })

    it('should add a X to a cell when current player is X', async () => {
      const { getByTestId, getByText } = render(<App />)
      expect(
        within(getByText(/Next move/)).getByText('X', { exact: true }),
      ).toBeInTheDocument()
      const firstCell = getByTestId('cell-0')
      fireEvent.click(firstCell)
      expect(
        await within(firstCell).findByText('X', { exact: true }),
      ).toBeInTheDocument()
    })

    it('should add an O to a cell when current player is O', async () => {
      const { getByTestId, getByText } = render(<App />)
      const firstCell = getByTestId('cell-0')
      fireEvent.click(getByTestId('cell-1'))
      expect(
        await within(getByText(/Next move/)).findByText('O', {
          exact: true,
        }),
      ).toBeInTheDocument()
      fireEvent.click(firstCell)
      expect(
        await within(firstCell).findByText('O', { exact: true }),
      ).toBeInTheDocument()
    })
  })

  describe('End of game', () => {
    it('should display X winner message when X gets 3 in a row', async () => {
      const { getByTestId, findByText } = render(<App />)
      fireEvent.click(getByTestId('cell-0'))
      fireEvent.click(getByTestId('cell-3'))
      fireEvent.click(getByTestId('cell-1'))
      fireEvent.click(getByTestId('cell-4'))
      fireEvent.click(getByTestId('cell-2'))
      expect(
        within(await findByText('has won!!!')).queryByText('X', {
          exact: true,
        }),
      ).toBeInTheDocument()
    })

    it('should display O winner message when O gets 3 in a row', async () => {
      const { getByTestId, findByText } = render(<App />)
      fireEvent.click(getByTestId('cell-0'))
      fireEvent.click(getByTestId('cell-3'))
      fireEvent.click(getByTestId('cell-6'))
      fireEvent.click(getByTestId('cell-4'))
      fireEvent.click(getByTestId('cell-8'))
      fireEvent.click(getByTestId('cell-5'))
      expect(
        within(await findByText('has won!!!')).queryByText('O', {
          exact: true,
        }),
      ).toBeInTheDocument()
    })
  })
})
