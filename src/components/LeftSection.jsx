import React, { useState, useEffect } from 'react'

import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../assets/image-product-4-thumbnail.jpg'
import { ReactComponent as IconClose } from '../assets/icon-close.svg'
import { ReactComponent as IconPrevious } from '../assets/icon-previous.svg'
import { ReactComponent as IconNext } from '../assets/icon-next.svg'

// TODO: 9th April 2022.
// 1. Extract product-display elements as individual component.
// 2. This product-display component will be used to display as overlay at root parent level.
// 3. Add next and previous icon(doing now... 9th april)

const LeftSection = ({ setToggleOverlay, setMainProduct }) => {
  let [currentProduct, setCurrentProduct] = useState('product-1')

  const image = require(`../assets/image-${currentProduct}.jpg`) //lazy load main display picture
  const mainProductImg = (
    <img
      onClick={() => popProductSelection(currentProduct)}
      src={image}
      alt="main-product-display"
    />
  )

  const popProductSelection = (x) => {
    // console.log('what is this', x)
    setToggleOverlay((prevState) => !prevState)
    console.log('imagesss', image)
    setMainProduct((prevState) => (prevState = image))
  }
  return (
    <div className="left">
      <div className="product-display">
        <IconPrevious />
        {mainProductImg}
        <IconNext />
      </div>
      <div></div>
      <div className="thumnails">
        <img
          onClick={() => setCurrentProduct('product-1')}
          src={product1Thumbnail}
          alt="thumnail1"
          className={`${currentProduct == 'product-1' ? 'active' : ''}`}
        />
        <img
          onClick={() => setCurrentProduct('product-2')}
          src={product2Thumbnail}
          alt="thumnail2"
          className={`${currentProduct == 'product-2' ? 'active' : ''}`}
        />
        <img
          onClick={() => setCurrentProduct('product-3')}
          src={product3Thumbnail}
          alt="thumnail3"
          className={`${currentProduct == 'product-3' ? 'active' : ''}`}
        />
        <img
          onClick={() => setCurrentProduct('product-4')}
          src={product4Thumbnail}
          alt="thumnail4"
          className={`${currentProduct == 'product-4' ? 'active' : ''}`}
        />
      </div>
    </div>
  )
}

export default LeftSection
