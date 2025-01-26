'use client'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import GeneratedTest from '../GeneratedTest/GeneratedTest'

const Tests = ({ isOpen }: { isOpen: boolean }) => {
  const [tests, setTests] = useState([
    {
      id: 1,
      name: 'Data Analysis-1',
      desc: 'TEST:1',
      subtopics: 10,
      question: 55,
      time: 1,
      difficulty: 25,
      checkmark: false
    },
    {
      id: 2,
      name: 'Data Analysis-2',
      desc: 'TEST:2',
      subtopics: 10,
      question: 55,
      time: 1,
      difficulty: 25,
      checkmark: false
    },
    {
      id: 3,
      name: 'Data Analysis-3',
      desc: 'TEST:3',
      subtopics: 8,
      question: 40,
      time: 2,
      difficulty: 25,
      checkmark: false
    },
    {
      id: 4,
      name: 'Data Analysis-4',
      desc: 'TEST:4',
      subtopics: 7,
      question: 50,
      time: 3,
      difficulty: 25,
      checkmark: false
    },
    {
      id: 5,
      name: 'Data Analysis-5',
      desc: 'TEST:5',
      subtopics: 7,
      question: 50,
      time: 3,
      difficulty: 25,
      checkmark: false
    },
    {
      id: 6,
      name: 'Data Analysis-6',
      desc: 'TEST:6',
      subtopics: 7,
      question: 50,
      time: 3,
      difficulty: 25,
      checkmark: false
    },
    {
      id: 7,
      name: 'Data Analysis-7',
      desc: 'TEST:7',
      subtopics: 7,
      question: 50,
      time: 3,
      difficulty: 25,
      checkmark: false
    },
    {
      id: 8,
      name: 'Data Analysis-8',
      desc: 'TEST:8',
      subtopics: 7,
      question: 50,
      time: 3,
      difficulty: 25,
      checkmark: false
    }
  ])

  return (
    <>
      {/* Testler kendinden önceki testin checkmark durumuna göre açılacak. Eğer 2 test true olmuşsa yeni bölüm dinamik olarak değişecek ve yeni bir test aktif olacak */}
      <GeneratedTest
        title={'NON-Generated Test'}
        text={'These are tests specially prepared by our teachers.'}
        isOpen={isOpen}
      />

      <div className='flex flex-col'>
        <div className='flex flex-wrap'>
          {tests.map((test, index) => (
            <React.Fragment key={test.id}>
              <div
                className={`relative h-[298px] rounded-[20px] mt-5 mr-2 bg-[#FFF5EB] ${
                  isOpen ? 'w-[552.5px]' : 'w-[851px]'
                }`}
              >
                {index > 0 && !tests[index - 1].checkmark && (
                  <div className=' absolute inset-0 rounded-[20px] flex flex-col items-center justify-center bg-gradient-to-b from-[#6FB2B826] to-[#FFFFFF00] bg-opacity-75 backdrop-blur-[15px] z-10 shadow-lg'>
                    <div className='flex flex-col items-center  '>
                      <div className=' w-[54px] h-[54px] flex items-center justify-center text-white'>
                        <img src='/padlock.png' />
                      </div>
                      <span className='text-lg mt-3 text-[#505254BF]'>Test Locked</span>
                      <span className='text-sm text-[#505254BF] mt-2 text-center'>
                        You cannot proceed to the next section until
                        <br /> you have completed the tests.
                      </span>
                      <button className='bg-[#FF7B5D8C] w-[190px] h-[46px] border-[3px] border-[linear-gradient(90deg,_#FFEDDC_0%,_#FFE6C0_100%,_#FF7B5D00_100%)] mt-5 rounded-[30px] text-white py-[10px] px-4 gap-4'>
                        Generate
                      </button>
                    </div>
                  </div>
                )}

                <div className='flex flex-row z-20'>
                  <h2 className='mt-5 ml-5'>{test.name}</h2>
                  {test.checkmark && <img src='/3d-checkmark.png' alt='checkmark' className='w-6 h-6 ml-2 mt-5' />}
                </div>
                <div className='text-[#505254BF] mt-5 ml-5'>{test.desc}</div>
                <div className='flex flex-col'>
                  <div className='flex flex-row'>
                    <div className='p-4'>
                      <div className='flex items-center'>
                        <div className='bg-[#FF7B5D] rounded-full w-[60px] h-[35px] flex items-center justify-center text-white'>
                          {test.subtopics}
                        </div>
                        <span className='text-sm ml-4'>SUBTOPICS</span>
                      </div>
                    </div>
                    <div className='p-4'>
                      <div className='flex items-center'>
                        <div className='bg-[#FF7B5D] rounded-full w-[60px] h-[35px] flex items-center justify-center text-white'>
                          {test.question}
                        </div>
                        <span className='text-sm ml-4'>QUESTIONS</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='p-4'>
                      <div className='flex items-center'>
                        <div className='bg-[#FF7B5D] rounded-full w-[60px] h-[35px] flex items-center justify-center text-white'>
                          {test.time} hr
                        </div>
                        <span className='text-sm ml-4'>TIME</span>
                      </div>
                    </div>
                    <div className='p-4 ml-[45px]'>
                      <div className='flex items-center'>
                        <div className='bg-[#FF7B5D] rounded-full w-[60px] h-[35px] flex items-center justify-center text-white'>
                          {test.difficulty}
                        </div>
                        <span className='text-sm ml-4'>DIFFICULTY</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='bg-[#6FB2B8] w-[189px] text-white h-[46px] rounded-[30px] border-[3px] p-[10px] gap-[10px] ml-[25px] mt-[10px] flex items-center justify-center'>
                  <span className='text-base flex items-center'>START NOW</span>
                  <MdOutlineKeyboardArrowRight className='relative -left-[10px] h-[30px] w-[30px]' />
                </button>
              </div>

              {(index + 1) % 2 === 0 && index !== tests.length - 1 && (
                <div className='w-full'>
                  {test.checkmark ? (
                    <GeneratedTest
                      title='NON-Generated Test'
                      text='These are tests specially prepared by our teachers.'
                      isOpen={isOpen}
                    />
                  ) : (
                    <GeneratedTest
                      title='Generated Test'
                      text='These are tests automatically created by the system. In order to move on this part, you need to solve non-generated tests.'
                      isOpen={isOpen}
                    />
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tests
