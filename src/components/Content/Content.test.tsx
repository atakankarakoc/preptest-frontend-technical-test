import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Content from './Content'

jest.mock('src/content/Functions.tsx', () => {
  return function MockFunctions() {
    return <div data-testid='functions'>Functions Component</div>
  }
})

jest.mock('src/content/DataAnalysis.tsx', () => {
  return function MockDataAnalysis({ isOpen }: { isOpen: boolean }) {
    return <div data-testid='data-analysis'>Data Analysis Component (isOpen: {isOpen.toString()})</div>
  }
})

jest.mock('src/content/Polinom.tsx', () => {
  return function MockPolinom() {
    return <div data-testid='polinom'>Polinom Component</div>
  }
})

describe('Content Component', () => {
  it('currentTopicId 1 olduğunda Functions render et', () => {
    render(<Content currentTopicId={1} isOpen={true} />)
    expect(screen.getByTestId('functions')).toBeInTheDocument()
    expect(screen.queryByTestId('data-analysis')).not.toBeInTheDocument()
    expect(screen.queryByTestId('polinom')).not.toBeInTheDocument()
  })

  it('currentTopicId 2 olduğunda DataAnalysis ı render et', () => {
    render(<Content currentTopicId={2} isOpen={true} />)
    expect(screen.getByTestId('data-analysis')).toBeInTheDocument()
    expect(screen.queryByTestId('functions')).not.toBeInTheDocument()
    expect(screen.queryByTestId('polinom')).not.toBeInTheDocument()
  })

  it('currentTopicId 3 olduğunda Polinomu render et', () => {
    render(<Content currentTopicId={3} isOpen={true} />)
    expect(screen.getByTestId('polinom')).toBeInTheDocument()
    expect(screen.queryByTestId('functions')).not.toBeInTheDocument()
    expect(screen.queryByTestId('data-analysis')).not.toBeInTheDocument()
  })

  it('currentTopicId hatalı ise Sayfa Bulunamadı yazdır', () => {
    render(<Content currentTopicId={4} isOpen={true} />)
    expect(screen.getByText('Sayfa Bulunamadı')).toBeInTheDocument()
    expect(screen.queryByTestId('functions')).not.toBeInTheDocument()
    expect(screen.queryByTestId('data-analysis')).not.toBeInTheDocument()
    expect(screen.queryByTestId('polinom')).not.toBeInTheDocument()
  })

  it('isOpen props olarak DataAnalysis içerisinde gönderiliyor mu', () => {
    const { rerender } = render(<Content currentTopicId={2} isOpen={true} />)
    expect(screen.getByTestId('data-analysis')).toHaveTextContent('isOpen: true')

    rerender(<Content currentTopicId={2} isOpen={false} />)
    expect(screen.getByTestId('data-analysis')).toHaveTextContent('isOpen: false')
  })
})
