import React from 'react'
import DisplayProducts from './DisplayProducts'
import { useSelector } from 'react-redux'

function OverlayProduct() {
  const toggle = useSelector((state) => state.toggle.value)
  return (
    <div>
      {toggle && (
        <div className="overlay">
          <div className="left">
            <DisplayProducts isRoot={true} />
          </div>
        </div>
      )}
    </div>
  )
}

export default OverlayProduct
