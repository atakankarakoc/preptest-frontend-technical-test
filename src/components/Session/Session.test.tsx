import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Session from './Session'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  }
}))

describe('Session Component', () => {
  it('tüm avatarları göster', () => {
    render(<Session isOpen={true} />)
    const avatars = screen.getAllByRole('img')
    expect(avatars).toHaveLength(3)
  })

  it('isOpen true olduğunda doğru widthi uygula', () => {
    render(<Session isOpen={true} />)

    const sessionDiv = screen.getByTestId('session-div')
    expect(sessionDiv).toHaveClass('w-[1124px]')
  })

  it('isOpen false olduğunda doğru widthi uygula', () => {
    render(<Session isOpen={false} />)
    const sessionDiv = screen.getByTestId('session-div')
    expect(sessionDiv).toHaveClass('w-full')
  })

  it('Açık olan kullanıcılar için aktif simgesini oluştur', () => {
    render(<Session isOpen={true} />)
    const activeIndicators = screen
      .getAllByRole('img', { name: /avatar/ })
      .filter(img => img.nextElementSibling && img.nextElementSibling.classList.contains('bg-green-500'))
    expect(activeIndicators.length).toBe(2)
  })

  it('Kullanıcı aktif değilse bu durumda gösterme', () => {
    render(<Session isOpen={true} />)
    const avatars = screen.getAllByRole('img', { name: /avatar/ })
    const inactiveAvatars = avatars.filter(
      img => !img.nextElementSibling || !img.nextElementSibling.classList.contains('bg-green-500')
    )
    expect(inactiveAvatars.length).toBe(1)
  })
})
