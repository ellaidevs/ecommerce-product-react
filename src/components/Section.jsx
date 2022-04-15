import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section = ({ setToggleOverlay, setMainProduct, isRoot }) => {
  return (
    <div className="section">
      <LeftSection
        setToggleOverlay={setToggleOverlay}
        setMainProduct={setMainProduct}
        isRoot={isRoot}
      />
      <RightSection />
    </div>
  )
}

export default Section
