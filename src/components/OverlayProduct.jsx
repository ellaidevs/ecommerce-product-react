import React from 'react'
import DisplayProducts from './DisplayProducts'
import { useSelector } from 'react-redux'

function OverlayProduct() {
  const toggle = useSelector((state) => state.toggle.value)
  const sidebarToggle = useSelector((state) => state.sidebar.value)

  return (
    <div>
      <div className={!sidebarToggle ? '' : ' mobile-sidebar-active'}>
        {toggle && (
          <div className="overlay">
            <div className="left">
              <DisplayProducts isRoot={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OverlayProduct
