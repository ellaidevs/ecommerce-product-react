import React from 'react'
import DisplayProducts from './DisplayProducts'

const LeftSection = ({ setToggleOverlay, isRoot }) => {
  return (
    <div className="left">
      <DisplayProducts setToggleOverlay={setToggleOverlay} isRoot={isRoot} />
    </div>
  )
}

export default LeftSection
