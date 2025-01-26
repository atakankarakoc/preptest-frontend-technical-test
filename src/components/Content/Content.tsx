import React from 'react'
import Functions from '../../content/Functions'
import DataAnalysis from '../../content/DataAnalysis'
import Polinom from '../../content/Polinom'

interface ContentProps {
  currentTopicId: number
  isOpen: boolean
}

const Content = ({ currentTopicId, isOpen }: ContentProps) => {
  return (
    <>
      {currentTopicId === 1 ? (
        <Functions />
      ) : currentTopicId === 2 ? (
        <DataAnalysis isOpen={isOpen} />
      ) : currentTopicId === 3 ? (
        <Polinom />
      ) : (
        'Sayfa Bulunamadı'
      )}
    </>
  )
}

export default Content
