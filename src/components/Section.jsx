import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section = ({ setToggleOverlay, setMainProduct }) => {
  return (
    <div className="section">
      <LeftSection
        setToggleOverlay={setToggleOverlay}
        setMainProduct={setMainProduct}
      />
      <RightSection />
    </div>
  )
}

export default Section
