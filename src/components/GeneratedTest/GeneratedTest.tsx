import React, { useState } from 'react'

interface GeneratedTestProps {
  title: string
  text: string
  isOpen: boolean
}

const GeneratedTest = ({ title, text, isOpen }: GeneratedTestProps) => {
  const [currentTitle, setCurrentTitle] = useState(title)

  return (
    <>
      <div
        className={` h-[90px] rounded-[20px] mt-5 overflow-hidden ${isOpen ? 'w-[1121px]' : 'w-full'} ${
          currentTitle === 'NON-Generated Test' ? 'bg-[#FFF5EB]' : 'bg-[#B5D6D840] bg-opacity-25'
        }`}
      >
        <div className='flex justify-between'>
          <div className='items-center ml-[25px] mt-[14px]'>
            <h3 data-testid='title' >{currentTitle}</h3>
            <p className='text-[#505254BF]' data-testid='text' >{text}</p>
          </div>
          <div className=' -mr-12 -mt-3'>
            <img src='/3d-casual-life.png' className='w-64 h-auto blur-[2px] -mr-5 object-fit' alt='3D Casual Life' />
          </div>
        </div>
      </div>
    </>
  )
}

export default GeneratedTest
