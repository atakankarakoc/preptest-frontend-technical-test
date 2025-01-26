import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Courses from './Courses'

jest.mock('src/components/Session/Session.tsx', () => {
  return function MockSession({ isOpen }: { isOpen: boolean }) {
    return <div data-testid='mock-session'>Session Component (isOpen: {isOpen.toString()})</div>
  }
})

jest.mock('src/components/TopSection/TopSection.tsx', () => {
  return function MockTopSection({ isOpen }: { isOpen: boolean }) {
    return <div data-testid='mock-top-section'>TopSection Component (isOpen: {isOpen.toString()})</div>
  }
})

describe('Courses Component', () => {
  it('Session ve TopSection varlığını kontrol et', () => {
    render(<Courses isOpen={true} />)

    expect(screen.getByTestId('mock-session')).toBeInTheDocument()
    expect(screen.getByTestId('mock-top-section')).toBeInTheDocument()
  })

  it('isOpen true olduğunda çalışıyor mu?', () => {
    render(<Courses isOpen={true} />)

    expect(screen.getByTestId('mock-session')).toHaveTextContent('isOpen: true')
    expect(screen.getByTestId('mock-top-section')).toHaveTextContent('isOpen: true')
  })

  it('isOpen false olduğunda çalışıyor mu', () => {
    render(<Courses isOpen={false} />)

    expect(screen.getByTestId('mock-session')).toHaveTextContent('isOpen: false')
    expect(screen.getByTestId('mock-top-section')).toHaveTextContent('isOpen: false')
  })
})
