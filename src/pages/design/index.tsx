'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SlHome } from 'react-icons/sl'
import { FaChartBar } from 'react-icons/fa'
import {
  MdClass,
  MdNoteAlt,
  MdMessage,
  MdOutlineSettings,
  MdLogout,
  MdDescription,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdMenu
} from 'react-icons/md'
import { IoPersonSharp } from 'react-icons/io5'
import { IoIosCalendar } from 'react-icons/io'
import Main from 'src/components/Main/Main'

export default function Design() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  const handleItemClick = (item: string) => {
    setActiveItem(prev => (prev === item ? null : item))
  }

  return (
    <div className='flex flex-col md:flex-row'>
      {/* Sol menü */}
      <aside
        className={`
          fixed md:absolute w-[250px] h-full bg-gray-100 shadow-lg transition-all duration-300 ease-in-out z-50
          ${isOpen ? 'left-0' : 'left-[-250px]'}
        `}
      >
        <div className='absolute top-[69.56px] left-[36px] md:static md:mt-[69.56px] md:ml-[36px]'>
          <img src='/PreptestLogo.svg' width={153} height={27} alt='Logo' />
        </div>

        <div className='absolute top-[198px] left-[36px] md:static md:mt-[128.44px] md:ml-[36px]'>
          <div className='space-y-7 mb-[120px]'>
            <div
              className={`flex items-center cursor-pointer ${activeItem === 'Dashboard' ? 'text-red-500' : ''}`}
              onClick={() => handleItemClick('Dashboard')}
              data-testid='dashboard-item'
            >
              <SlHome className='w-[32px] h-[24px]' />
              <span
                className={`ml-4 text-sm font-medium ${activeItem === 'Dashboard' ? 'text-red-500' : 'text-gray-700'}`}
              >
                Dashboard
              </span>
            </div>

            <h5 className='text-gray-800 font-medium text-[16px] leading-[24px] tracking-[0.15px] mt-[61.45px] mb-[26.55px]'>
              PAGES
            </h5>

            {[
              { name: 'Classes', icon: MdClass },
              { name: 'Exam Module', icon: MdNoteAlt },
              { name: 'Statics', icon: FaChartBar },
              { name: 'Recommendation', icon: IoPersonSharp },
              { name: 'Calendar', icon: IoIosCalendar }
            ].map((page, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer ${activeItem === page.name ? 'text-red-500' : ''}`}
                onClick={() => handleItemClick(page.name)}
                data-testid={`${page.name.toLowerCase().replace(/ /g, '-')}-item`}
              >
                <page.icon className='w-[32px] h-[24px]' />
                <span
                  className={`ml-4 text-sm font-normal ${activeItem === page.name ? 'text-red-500' : 'text-gray-700'}`}
                >
                  {page.name}
                </span>
              </div>
            ))}
          </div>

          <h2 className='text-gray-800 font-medium text-[16px] leading-[24px] tracking-[0.15px] mb-[14px]'>
            ACCOUNT SETTINGS
          </h2>

          <div className='space-y-7'>
            {[
              { name: 'Message Board', icon: MdMessage },
              { name: 'Settings', icon: MdOutlineSettings },
              { name: 'Logout', icon: MdLogout },
              { name: 'Terms & Conditions', icon: MdDescription }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer ${activeItem === item.name ? 'text-red-500' : ''}`}
                onClick={() => handleItemClick(item.name)}
                data-testid={`${item.name.toLowerCase().replace(/ /g, '-')}-item`}
              >
                <item.icon className='w-[32px] h-[24px]' />
                <span
                  className={`ml-4 text-sm font-normal ${activeItem === item.name ? 'text-red-500' : 'text-gray-700'}`}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* açma kapama butonu */}
        <div className='absolute z-50 right-[-20px] top-[58px]'>
          <button
            onClick={toggleSidebar}
            className='border rounded-full w-10 h-10 bg-white shadow-md hover:bg-gray-50'
            aria-label='Toggle sidebar'
            data-testid='desktop-toggle'
          >
            {isOpen ? (
              <MdOutlineKeyboardArrowLeft className='w-6 h-6 mx-auto' />
            ) : (
              <MdOutlineKeyboardArrowRight className='w-6 h-6 mx-auto' />
            )}
          </button>
        </div>
      </aside>
      <div
        className={`
          flex-grow transition-all duration-300 z-0
          mt-16 md:mt-0
          ${isOpen ? 'md:ml-[250px]' : 'md:ml-0'}
          ${isOpen ? 'w-[calc(100%-250px)]' : 'w-full'}
          px-4 md:px-8 lg:px-[100px]
        `}
        data-testid='main-content'
      >
        <Main activeItem={activeItem} isOpen={isOpen} />
      </div>
    </div>
  )
}
