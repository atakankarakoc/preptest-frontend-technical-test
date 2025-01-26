'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Tests from 'src/components/Tests/Tests'

const DataAnalysis = ({ isOpen }: { isOpen: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Açılan dersin içeriklerini ve testlerini göster */}
      <div className='flex flex-col lg:flex-row mt-4 lg:mt-8 items-start w-full'>
        <div
          className={`border-2 rounded-[20px] bg-[#FFF5EB] flex flex-col p-4 transition-all duration-500 ease-in-out 
            ${isExpanded ? 'h-auto' : 'h-auto lg:h-[298px]'} 
            w-full lg:w-[70%] mb-4 lg:mb-0`}
        >
          <p className='flex mt-2 lg:mt-[29px] items-center justify-center h-auto lg:h-[42px] font-poppins text-xl lg:text-[26px] font-medium leading-tight lg:leading-[41.6px] tracking-[0.15px] text-center  decoration-skip-ink text-[#FF7B5D] mb-4'>
            NOTES: DATA ANALYSIS
          </p>
          <div className='flex flex-col lg:flex-row mb-4'>
            <div className='relative w-full lg:w-[139px] h-[186px] mb-4 lg:mb-0 lg:mr-4 flex-shrink-0'>
              <Image
                src='/dataanalysis.png'
                alt='Data Analysis'
                layout='fill'
                objectFit='cover'
                className='bg-[#FFBCAD] rounded-[20px]'
              />
            </div>
            <div className='flex flex-col'>
              <p className='font-poppins text-sm lg:text-base font-normal leading-5 lg:leading-6 tracking-[0.15px] text-left'>
                Lorem ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris enim feugiat
                volutpat feugiat sed. Adipiscing amet malesuada a in neque pellentesque turpis suspendisse. Urna sed in
                ornare proin proin parturient tincidunt luctus nunc. Proin cras enim maecenas in tincidunt. Dui
                tristique lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies aliquam ut arcu
                lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit egestas viverra egestas mauris nunc.
                Malesuada suspendisse sit quis nulla
                <span className={isExpanded ? 'inline' : 'hidden'}>
                  {' '}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate rem consequatur magni ea omnis
                  debitis nam exercitationem, dolores recusandae eligendi non aliquam, tempora unde, ipsa delectus
                  ducimus fuga asperiores dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam,
                  aspernatur, aliquam earum temporibus nesciunt suscipit dicta neque consequatur omnis consectetur
                  eaque, cumque sunt vel nihil est provident ullam quisquam?
                </span>
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`cursor-pointer bg-[#FF7B5D] text-white rounded-[20px] w-[159px] h-[41px] relative transition-all duration-500 ease-in-out ${
                !isExpanded ? 'lg:bottom-[85px]' : 'bottom-[0px]'
              }`}
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
        <div
          className={`h-auto lg:h-[298px] rounded-[20px] border mt-4 lg:mt-0 lg:ml-5 w-full lg:w-[30%]`}
          style={{
            background: 'linear-gradient(180deg, #B5D6D8BF 75%, #FFF2E660 37.5%)'
          }}
        >
          <div className='m-4 lg:ml-5 lg:mr-5 h-[70px] rounded-[15px] bg-white lg:mt-4 p-2'>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center ml-5'>
                <div className='font-poppins font-medium text-black mr-1 text-sm lg:text-base'>Data Analys. Level</div>
                <div className='text-black'>
                  <MdOutlineKeyboardArrowRight size={20} />
                </div>
              </div>

              <div className='flex flex-row items-center mt-2 ml-5'>
                <div className='relative w-[149px] h-1 bg-[#FFDFD7]'>
                  <div className='absolute top-0 left-0 w-[106px] h-1 bg-gradient-to-r from-[#FA4100] to-[#FA410000]'></div>
                </div>
                <div className='ml-2 font-poppins font-medium text-black text-sm lg:text-base'>%59</div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-2 h-auto lg:h-[183px] rounded-[15px] bg-white mt-4 mb-4 mx-4 lg:mx-5 p-2'>
            {[
              { percent: 70, color: ['#FA4100', '#FB7C50'], icon: '/check.png' },
              { percent: 85, color: ['#E0A2FD00', '#E0A2FD'], icon: '/success.png' },
              { percent: 3.4, color: ['#89DCC800', '#89DCC8'], icon: '/level-up.png' }
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                <div className='relative flex items-center justify-center mt-5'>
                  <svg className='w-[40px] h-[40px] absolute transform -rotate-90'>
                    <circle
                      cx='20'
                      cy='20'
                      r='18'
                      fill='none'
                      stroke={`url(#gradient${index})`}
                      strokeWidth='4'
                      strokeDasharray={`${2 * Math.PI * 18 * (item.percent / 100)} ${2 * Math.PI * 18}`}
                    />
                    <defs>
                      <linearGradient id={`gradient${index}`} x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor={item.color[0]} />
                        <stop offset='100%' stopColor={item.color[1]} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <Image
                    src={item.icon || '/placeholder.svg'}
                    alt='Progress Check'
                    width={20}
                    height={20}
                    className='z-10'
                  />
                </div>
                <div className='flex flex-col items-center justify-center text-center mt-4 lg:mt-5'>
                  <span className='text-base lg:text-xl font-semibold'>%{item.percent}</span>
                  <span className='text-gray-600 text-xs lg:text-sm'>Overall Progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Tests isOpen={isOpen} />
    </>
  )
}

export default DataAnalysis
