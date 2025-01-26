import React from 'react'
import Session from '../Session/Session'
import TopSection from '../TopSection/TopSection'

const Courses = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {/* Kullanıcılar ve üst başlık */}
      <Session isOpen={isOpen} />
      <TopSection isOpen={isOpen} />
    </>
  )
}

export default Courses
