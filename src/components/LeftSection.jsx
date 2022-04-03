import React, { useState, useEffect } from 'react'

import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../assets/image-product-4-thumbnail.jpg'
import { ReactComponent as IconClose } from '../assets/icon-close.svg'

const LeftSection = () => {
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
    console.log('what is this', x)
  }
  return (
    <div className="left">
      <div className="product-display">{mainProductImg}</div>
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

      {/* Main display layover */}
      <div className="overlay-product-view">
        <IconClose className="icon-close-overlay" />
        <div>Product overlay view</div>
      </div>
    </div>
  )
}

export default LeftSection
