import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section = ({ isRoot }) => {
  return (
    <div className="section">
      <LeftSection isRoot={isRoot} />
      <RightSection />
    </div>
  )
}

export default Section
