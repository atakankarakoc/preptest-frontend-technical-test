import React from 'react'
import Courses from '../Courses/Courses'
const Main = ({ activeItem, isOpen }: { activeItem: any; isOpen: boolean }) => {
  return (
    // Ana Bölüm
    <div className={`flex-1 transition-all duration-300  ${isOpen ? ' w-[1124px]' : 'ml-0 w-full'}`}>
      <main>
        {activeItem === 'Classes' ? (
          <Courses isOpen={isOpen} />
        ) : (
          <div className='p-10  border rounded shadow'>
            <h2 className='text-xl font-bold mb-2'>{activeItem}</h2>
            <p>Burası {activeItem} için.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Main
