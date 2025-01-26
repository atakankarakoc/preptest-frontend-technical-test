import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from './Main'

jest.mock('src/components/Courses/Courses.tsx', () => {
  return function MockCourses({ isOpen }: { isOpen: boolean }) {
    return <div data-testid='mock-courses'>Courses Component (isOpen: {isOpen.toString()})</div>
  }
})

describe('Main Component', () => {
  it('activeItem "Classes" ise Course u render et', () => {
    render(<Main activeItem='Classes' isOpen={true} />)
    expect(screen.getByTestId('mock-courses')).toBeInTheDocument()
    expect(screen.getByTestId('mock-courses')).toHaveTextContent('isOpen: true')
  })

  it('diğer bileşenler için varsayılanı oluştur', () => {
    render(<Main activeItem='Dashboard' isOpen={false} />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Burası Dashboard için.')).toBeInTheDocument()
  })

  it('isOpen true olduğunda doğru genişliği uygula', () => {
    render(<Main activeItem='Dashboard' isOpen={true} />)
    const mainDiv = screen.getByRole('main').parentElement
    expect(mainDiv).toHaveClass('w-[1124px]')
  })

  it('isOpen false ise doğru genişliği uygula', () => {
    render(<Main activeItem='Dashboard' isOpen={false} />)
    const mainDiv = screen.getByRole('main').parentElement
    expect(mainDiv).toHaveClass('w-full')
  })
})
