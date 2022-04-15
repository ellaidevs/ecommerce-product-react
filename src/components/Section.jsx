import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section = ({ setToggleOverlay, isRoot }) => {
  return (
    <div className="section">
      <LeftSection setToggleOverlay={setToggleOverlay} isRoot={isRoot} />
      <RightSection />
    </div>
  )
}

export default Section
