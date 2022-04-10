import React, { useState } from 'react'

import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../assets/image-product-4-thumbnail.jpg'
import { ReactComponent as IconClose } from '../assets/icon-close.svg'
import { ReactComponent as IconPrevious } from '../assets/icon-previous.svg'
import { ReactComponent as IconNext } from '../assets/icon-next.svg'

function DisplayProducts({ setToggleOverlay, setMainProduct, isRoot }) {
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
    console.log('imagesssssxxxs', image)
    console.log('isRoot', isRoot)
    setMainProduct((prevState) => (prevState = image))
  }
  return (
    <div>
      <div className="product-display">
        {/* if isRoot is false, disable the previous and next icon */}
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

export default DisplayProducts
