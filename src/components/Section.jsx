import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section = ({ setToggleOverlay }) => {
  return (
    <div className="section">
      <LeftSection setToggleOverlay={setToggleOverlay} />
      <RightSection />
    </div>
  )
}

export default Section
