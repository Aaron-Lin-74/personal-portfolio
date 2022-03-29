import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Header component', () => {
  test('should render component', () => {
    render(<Header />)
    screen.getByText(/portfolio/i)
    screen.getByText(/projects/i)
    screen.getByText(/technologies/i)
    screen.getByText(/contact me/i)
    screen.getByTitle('linkedin link')
    screen.getByTitle('github link')
  })
})
