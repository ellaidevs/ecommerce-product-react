import React from 'react'
import DisplayProducts from './DisplayProducts'

const LeftSection = ({ isRoot }) => {
  return (
    <div className="left">
      <DisplayProducts isRoot={isRoot} />
    </div>
  )
}

export default LeftSection
