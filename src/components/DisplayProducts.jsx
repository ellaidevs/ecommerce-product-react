import React, { useState, useEffect } from 'react'

import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../assets/image-product-4-thumbnail.jpg'
import { ReactComponent as IconClose } from '../assets/icon-close.svg'
import { ReactComponent as IconPrevious } from '../assets/icon-previous.svg'
import { ReactComponent as IconNext } from '../assets/icon-next.svg'

function DisplayProducts({ setToggleOverlay, setMainProduct, isRoot }) {
  let [imgCounter, setImgCounter] = useState(1)
  let [currentProduct, setCurrentProduct] = useState(`product-${imgCounter}`)

  const image = require(`../assets/image-${currentProduct}.jpg`) //lazy load main display picture
  const mainProductImg = (
    <img
      onClick={() => popProductSelection(currentProduct)}
      src={image}
      alt="main-product-display"
    />
  )

  const popProductSelection = () => {
    if (!isRoot) {
      setToggleOverlay((prevState) => !prevState)
    }

    setMainProduct((prevState) => (prevState = image))
  }

  const closeOverlay = () => {
    setToggleOverlay((prevState) => !prevState)
  }

  const getPreviousPic = (x) => {
    setCurrentProduct(`product-2`)
  }

  useEffect(() => {
    setCurrentProduct(`product-${imgCounter}`)
  }) //? No clean up for useEffect is needed since we are not fetching any api that can cause infinite loop

  const getNextPic = () => {
    if (imgCounter < 4) setImgCounter((prevState) => ++prevState)
  }

  return (
    <div>
      {isRoot ? (
        <div className="display-root">
          <IconClose onClick={closeOverlay} className="icon-close" />
          <div className="product-display">
            <IconPrevious
              className="icon-previous"
              onClick={() => getPreviousPic('ohno')}
            />
            {mainProductImg}
            <IconNext
              className="icon-next"
              onClick={() => getNextPic('ohno')}
            />
          </div>
        </div>
      ) : (
        <div className="product-display">{mainProductImg}</div>
      )}

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
