import type React from 'react'
import Image from 'next/image'

const avatar = [
  { id: 1, name: 'Kemal', avatarurl: '/profile.png', active: true },
  { id: 2, name: 'Mehmet', avatarurl: '/profile.png', active: false },
  { id: 3, name: 'Ali', avatarurl: '/profile.png', active: true }
]

interface SessionProps {
  isOpen: boolean
}

const Session = ({ isOpen }: SessionProps) => {
  return (
    <div
      data-testid='session-div'
      className={`relative h-[60px] ml-[32px] top-[60px] flex justify-end items-center ${
        isOpen ? 'w-[1124px]' : 'w-full'
      }`}
    >
      <div className='flex'>
        {avatar.map((item, index) => (
          <div key={item.id} className={`relative ${index !== 0 ? 'ml-2' : ''}`}>
            <Image
              src={item.avatarurl || '/placeholder.svg'}
              width={40}
              height={40}
              alt={`${item.name}'s avatar`}
              className='w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white'
            />
            {item.active && (
              <span className='absolute bg-green-500 w-2 h-2 sm:w-[8px] sm:h-[8px] rounded-full bottom-0 right-0 border-2 border-white'></span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Session
