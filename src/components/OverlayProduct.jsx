import React from 'react'
import DisplayProducts from './DisplayProducts'

function OverlayProduct({ toggleOverlay, setToggleOverlay }) {
  return (
    <div>
      {toggleOverlay && (
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
