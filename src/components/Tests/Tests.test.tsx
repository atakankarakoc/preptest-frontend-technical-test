import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tests from './Tests'

jest.mock('src/components/GeneratedTest/GeneratedTest', () => {
  return function MockGeneratedTest({ title, text, isOpen }: { title: string; text: string; isOpen: boolean }) {
    return (
      <div data-testid='mock-generated-test'>
        {title} (isOpen: {isOpen.toString()})
      </div>
    )
  }
})

describe('Tests Component', () => {
  it('test karlarının sayısını doğrula', () => {
    render(<Tests isOpen={true} />)
    const testCards = screen.getAllByText(/Data Analysis-\d/)
    expect(testCards).toHaveLength(8)
  })

  it('GeneratedTest render et', () => {
    render(<Tests isOpen={true} />)
    const generatedTests = screen.getAllByTestId('mock-generated-test')
    expect(generatedTests.length).toBeGreaterThan(0)
  })

  it('isOpen true olduğunda test cardlarına doğru genişlik uygula', () => {
    render(<Tests isOpen={true} />)
    const testCards = screen.getAllByText(/Data Analysis-\d/)
    testCards.forEach(card => {
      const parentDiv = card.closest('div[class*="rounded-[20px]"]')
      expect(parentDiv).toHaveClass('w-[552.5px]')
    })
  })

  it('isOpen false olduğunda test cardlarına doğru genişlik uygula', () => {
    render(<Tests isOpen={false} />)
    const testCards = screen.getAllByText(/Data Analysis-\d/)
    testCards.forEach(card => {
      const parentDiv = card.closest('div[class*="rounded-[20px]"]')
      expect(parentDiv).toHaveClass('w-[851px]')
    })
  })

  it('tamamlanmamış testler için kilit oluştur', () => {
    render(<Tests isOpen={true} />)
    const lockedOverlays = screen.getAllByText('Test Locked')
    expect(lockedOverlays.length).toBe(7)
  })

  it('Tamamlanmamış testler için onay işareti oluşturma', () => {
    render(<Tests isOpen={true} />)
    const checkmarks = screen.queryAllByAltText('checkmark')
    expect(checkmarks.length).toBe(0)
  })

  it('her test cardı için start butonu oluştur', () => {
    render(<Tests isOpen={true} />)
    const startButtons = screen.getAllByText('START NOW')
    expect(startButtons).toHaveLength(8)
  })

  it('GeneratedTest componentinin sayısını doğru oluşturma', () => {
    render(<Tests isOpen={true} />)
    const generatedTests = screen.getAllByTestId('mock-generated-test')
    expect(generatedTests).toHaveLength(4)
  })
})
