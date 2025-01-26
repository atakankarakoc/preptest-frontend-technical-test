import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TopSection from './TopSection'

jest.mock('../../components/Content/Content.tsx', () => {
  return function MockContent({ currentTopicId, isOpen }: { currentTopicId: number; isOpen: boolean }) {
    return (
      <div data-testid='mock-content'>
        Content: {currentTopicId}, Open: {isOpen.toString()}
      </div>
    )
  }
})

jest.mock('react-icons/md', () => ({
  MdOutlineKeyboardArrowLeft: () => <span>LeftArrow</span>,
  MdOutlineKeyboardArrowRight: () => <span>RightArrow</span>
}))

describe('TopSection Component', () => {
  it('isOpen true olduğunda bileşenler gösteriliyor mu', () => {
    render(<TopSection isOpen={true} />)

    expect(screen.getByText('TESTS')).toBeInTheDocument()
    expect(screen.getByTestId('mock-content')).toBeInTheDocument()
    expect(screen.getByText('Fonksiyonlar')).toBeInTheDocument()
    expect(screen.getByText('Polinomlar')).toBeInTheDocument()
    expect(screen.queryByText('Data Analysis')).not.toBeInTheDocument()
  })

  it('isOpen false olduğunda bileşenler gösteriliyor mu', () => {
    render(<TopSection isOpen={false} />)

    expect(screen.getByText('TESTS')).toBeInTheDocument()
    expect(screen.getByTestId('mock-content')).toBeInTheDocument()
    expect(screen.getByText('Fonksiyonlar')).toBeInTheDocument()
    expect(screen.getByText('Polinomlar')).toBeInTheDocument()
    expect(screen.queryByText('Data Analysis')).not.toBeInTheDocument()
  })

  it('isOpen durumuna göre genişliği değiştir', () => {
    const { rerender } = render(<TopSection isOpen={true} />)

    expect(screen.getByTestId('mock-content').parentElement).toHaveClass('w-[1124px]')

    rerender(<TopSection isOpen={false} />)

    expect(screen.getByTestId('mock-content').parentElement).toHaveClass('w-full')
  })

  it('Önceki konuya geçiş butonu doğru çalışıyor mu', () => {
    render(<TopSection isOpen={true} />)

    const leftArrowButton = screen.getByText('Fonksiyonlar').closest('button')
    fireEvent.click(leftArrowButton!)

    expect(screen.getByTestId('mock-content')).toHaveTextContent('Content: 1')
  })

  it('sonraki konuya geçiş butonu doğru çalışıyor mu', () => {
    render(<TopSection isOpen={true} />)

    const rightArrowButton = screen.getByText('Polinomlar').closest('button')
    fireEvent.click(rightArrowButton!)

    expect(screen.getByTestId('mock-content')).toHaveTextContent('Content: 3')
  })

  it('ilk konu için left arrow oluşturulmaz', () => {
    render(<TopSection isOpen={true} />)

    const leftArrowButton = screen.getByText('Fonksiyonlar').closest('button')
    fireEvent.click(leftArrowButton!)

    expect(screen.queryByText('LeftArrow')).not.toBeInTheDocument()
  })

  it('son konu için right arrow oluşturulmaz', () => {
    render(<TopSection isOpen={true} />)

    const rightArrowButton = screen.getByText('Polinomlar').closest('button')
    fireEvent.click(rightArrowButton!)

    expect(screen.queryByText('RightArrow')).not.toBeInTheDocument()
  })

  it('Content bileşenine doğru proplar geçiyor mu', () => {
    render(<TopSection isOpen={true} />)

    expect(screen.getByTestId('mock-content')).toHaveTextContent('Content: 2, Open: true')

    const rightArrowButton = screen.getByText('Polinomlar').closest('button')
    fireEvent.click(rightArrowButton!)

    expect(screen.getByTestId('mock-content')).toHaveTextContent('Content: 3, Open: true')
  })

  it('konular arasında gezinirken data analysis gösteriliyor mu', () => {
    render(<TopSection isOpen={true} />)

    expect(screen.queryByText('Data Analysis')).not.toBeInTheDocument()

    const leftArrowButton = screen.getByText('Fonksiyonlar').closest('button')
    fireEvent.click(leftArrowButton!)

    expect(screen.getByText('Data Analysis')).toBeInTheDocument()
  })
})
