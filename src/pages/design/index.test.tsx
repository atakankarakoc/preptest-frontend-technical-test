import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Design from './index'

jest.mock('src/components/Main/Main', () => {
  return function MockMain({ activeItem, isOpen }: { activeItem: string | null; isOpen: boolean }) {
    return (
      <div data-testid='mock-main'>
        Main: {activeItem}, Open: {isOpen.toString()}
      </div>
    )
  }
})

describe('Design Component', () => {
  it('renders correctly', () => {
    render(<Design />)

    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('PAGES')).toBeInTheDocument()
    expect(screen.getByText('ACCOUNT SETTINGS')).toBeInTheDocument()
    expect(screen.getByTestId('mock-main')).toBeInTheDocument()
    expect(screen.getByTestId('desktop-toggle')).toBeInTheDocument()
  })

  it('butona basıldığında kenar çubuğu değişiyor mu?', () => {
    render(<Design />)

    const toggleButton = screen.getByTestId('desktop-toggle')
    fireEvent.click(toggleButton)

    expect(screen.getByTestId('mock-main')).toHaveTextContent('Open: false')
  })

  it('menüde tıklama sonrası açılan sekmeler çalışıyor mu?', () => {
    render(<Design />)

    const classesItem = screen.getByTestId('classes-item')
    fireEvent.click(classesItem)

    expect(screen.getByTestId('mock-main')).toHaveTextContent('Main: Classes')
  })

  it('Menüdeki itemları doğrula', () => {
    render(<Design />)

    const sidebarItems = [
      'Dashboard',
      'Classes',
      'Exam Module',
      'Statics',
      'Recommendation',
      'Calendar',
      'Message Board',
      'Settings',
      'Logout',
      'Terms & Conditions'
    ]

    sidebarItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it('tıklanan itemın rengini doğrula', () => {
    render(<Design />)

    const dashboardItem = screen.getByTestId('dashboard-item')
    fireEvent.click(dashboardItem)

    expect(dashboardItem).toHaveClass('text-red-500')
    expect(dashboardItem.querySelector('span')).toHaveClass('text-red-500')
  })
})
