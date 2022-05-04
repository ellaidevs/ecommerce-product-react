import React from 'react'
import DisplayProducts from './DisplayProducts'

const LeftSection = () => {
  return (
    <div className="left">
      <DisplayProducts isRoot={false} />
    </div>
  )
}

export default LeftSection
