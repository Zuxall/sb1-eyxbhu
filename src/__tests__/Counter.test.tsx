import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from '../components/Counter'
import { describe, it, expect } from 'vitest'

describe('Counter', () => {
  it('renders initial count', () => {
    render(<Counter />)
    expect(screen.getByText('Count: 0')).toBeDefined()
  })

  it('increments count when button is clicked', () => {
    render(<Counter />)
    const button = screen.getByText('Increment')
    fireEvent.click(button)
    expect(screen.getByText('Count: 1')).toBeDefined()
  })
})