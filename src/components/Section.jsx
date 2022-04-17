import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section = ({ setToggleOverlay, isRoot, setSumOfCart }) => {
  return (
    <div className="section">
      <LeftSection setToggleOverlay={setToggleOverlay} isRoot={isRoot} />
      <RightSection setSumOfCart={setSumOfCart} />
    </div>
  )
}

export default Section
