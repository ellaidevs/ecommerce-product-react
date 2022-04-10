import React from 'react'
import DisplayProducts from './DisplayProducts'

// TODO: 9th April 2022.
// 1. Extract product-display elements as individual component.
// 2. This product-display component will be used to display as overlay at root parent level.
// 3. Add next and previous icon(doing now... 9th april)

const LeftSection = ({ setToggleOverlay, setMainProduct }) => {
  return (
    <div className="left">
      <DisplayProducts
        setToggleOverlay={setToggleOverlay}
        setMainProduct={setMainProduct}
      />
    </div>
  )
}

export default LeftSection
