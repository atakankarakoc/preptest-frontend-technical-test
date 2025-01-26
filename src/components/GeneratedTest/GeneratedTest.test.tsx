import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GeneratedTest from './GeneratedTest'

describe('GeneratedTest Component', () => {
  const defaultProps = {
    title: 'Test Title',
    text: 'Test Text',
    isOpen: false
  }

  it('defaultProps göre kontrol et', () => {
    render(<GeneratedTest {...defaultProps} />)

    expect(screen.getByTestId('title')).toHaveTextContent('Test Title')
    expect(screen.getByTestId('text')).toHaveTextContent('Test Text')
  })

  it('isOpen durumuna göre doğru widthi uygulama', () => {
    const { container, rerender } = render(<GeneratedTest {...defaultProps} />)

    expect(container.firstChild).toHaveClass('w-full')
    expect(container.firstChild).not.toHaveClass('w-[1121px]')

    rerender(<GeneratedTest {...defaultProps} isOpen={true} />)

    expect(container.firstChild).toHaveClass('w-[1121px]')
    expect(container.firstChild).not.toHaveClass('w-full')
  })

  it('başlık adına göre doğru arka plan rengini gösterme', () => {
    const { container } = render(<GeneratedTest {...defaultProps} />)

    expect(container.firstChild).toHaveClass('bg-[#B5D6D840]')
    expect(container.firstChild).not.toHaveClass('bg-[#FFF5EB]')

    const { container: container2 } = render(<GeneratedTest {...defaultProps} title='NON-Generated Test' />)

    expect(container2.firstChild).toHaveClass('bg-[#FFF5EB]')
    expect(container2.firstChild).not.toHaveClass('bg-[#B5D6D840]')
  })

  it('Resim özelliklerinin kontrolü', () => {
    render(<GeneratedTest {...defaultProps} />)

    const image = screen.getByAltText('3D Casual Life')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/3d-casual-life.png')
    expect(image).toHaveClass('w-64', 'h-auto', 'blur-[2px]', '-mr-5', 'object-fit')
  })
})
