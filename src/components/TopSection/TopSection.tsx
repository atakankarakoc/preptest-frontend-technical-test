import React from 'react'
import { useState } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Content from '../Content/Content'

const topics = [
  { id: 1, topic: 'Fonksiyonlar' },
  { id: 2, topic: 'Data Analysis' },
  { id: 3, topic: 'Polinomlar' }
]

const TopSection = ({ isOpen }: { isOpen: boolean }) => {
  const [currentTopicId, setCurrentTopicId] = useState(2)

  const prevTopic = topics.find(t => t.id === currentTopicId - 1)
  const nextTopic = topics.find(t => t.id === currentTopicId + 1)

  return (
    <>
      <div
        className={`relative h-[60px] rounded-[20px] ml-[32px] mr-[40px] top-[calc(106px-28px)] border bg-[rgb(255,243,230)] mb-4 ${
          isOpen ? 'w-[1124px]' : 'w-full'
        }`}
      >
        {/* Açılan derse göre üst barı dinamik olarak güncelle ve açılan dersi contente props olarak gönder */}
        <div className='flex justify-between items-center w-full h-full px-2 sm:px-4'>
          {prevTopic ? (
            <button
              className='flex items-center text-[rgb(252,100,75)] hover:text-[rgb(220,85,65)]'
              onClick={() => setCurrentTopicId(prevTopic.id)}
            >
              <MdOutlineKeyboardArrowLeft className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-1' />
              <p className='text-xs sm:text-sm lg:text-lg truncate max-w-[80px] sm:max-w-[120px] lg:max-w-full'>
                {prevTopic.topic}
              </p>
            </button>
          ) : (
            <div className='w-[80px] sm:w-[120px] lg:w-[150px]' />
          )}
          <span className='text-[rgb(252,100,75)] font-bold text-sm sm:text-base lg:text-2xl'>TESTS</span>
          {nextTopic ? (
            <button
              className='flex items-center text-[rgb(252,100,75)] hover:text-[rgb(220,85,65)]'
              onClick={() => setCurrentTopicId(nextTopic.id)}
            >
              <p className='text-xs sm:text-sm lg:text-lg truncate max-w-[80px] sm:max-w-[120px] lg:max-w-full'>
                {nextTopic.topic}
              </p>
              <MdOutlineKeyboardArrowRight className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-1' />
            </button>
          ) : (
            <div className='w-[80px] sm:w-[120px] lg:w-[150px]' />
          )}
        </div>
        <Content currentTopicId={currentTopicId} isOpen={isOpen} />
      </div>
    </>
  )
}

export default TopSection
