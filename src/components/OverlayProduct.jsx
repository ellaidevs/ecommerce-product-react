import React from 'react'
import DisplayProducts from './DisplayProducts'
import { useSelector } from 'react-redux'

function OverlayProduct({ setToggleOverlay }) {
  const toggle = useSelector((state) => state.toggle.value)

  console.log('check toggle', toggle)
  return (
    <div>
      {toggle && (
        <div className="overlay">
          <div className="left">
            <DisplayProducts
              isRoot={true}
              setToggleOverlay={setToggleOverlay}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default OverlayProduct
