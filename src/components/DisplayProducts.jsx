import React, { useState, useEffect } from 'react'

import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import product2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import product3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import product4Thumbnail from '../assets/image-product-4-thumbnail.jpg'
import { ReactComponent as IconClose } from '../assets/icon-close.svg'
import { ReactComponent as IconPrevious } from '../assets/icon-previous.svg'
import { ReactComponent as IconNext } from '../assets/icon-next.svg'
import { useDispatch } from 'react-redux'
import { setToggleOverlay } from '../redux/toggleOverlay'

function DisplayProducts({ isRoot }) {
  const dispatch = useDispatch()
  let [imgCounter, setImgCounter] = useState(1)
  let [currentProduct, setCurrentProduct] = useState(`product-${imgCounter}`)

  const image = require(`../assets/image-${currentProduct}.jpg`) //lazy load main display picture
  const mainProductImg = (
    // <div>
    <img
      className="product-display"
      onClick={() => popProductSelection(currentProduct)}
      src={image}
      alt="main-product-display-container"
    />
    // </div>
  )

  const popProductSelection = () => {
    if (!isRoot) {
      dispatch(setToggleOverlay())
    }
  }

  const closeOverlay = () => {
    dispatch(setToggleOverlay())
  }

  useEffect(() => {
    setCurrentProduct(`product-${imgCounter}`)
  }, [imgCounter])

  const getNextPic = () => {
    if (imgCounter < 4) setImgCounter((prevState) => ++prevState)
  }

  const getPreviousPic = () => {
    if (imgCounter > 1) setImgCounter((prevState) => --prevState)
  }

  return (
    <div>
      {isRoot ? (
        <div className="display-root">
          <IconClose onClick={closeOverlay} className="icon-close" />
          <div className="product-display-container">
            <IconPrevious className="icon-previous" onClick={getPreviousPic} />
            {mainProductImg}
            <IconNext className="icon-next" onClick={getNextPic} />
          </div>
        </div>
      ) : (
        <div className="product-display-container">{mainProductImg}</div>
      )}

      <div className="thumnails">
        <div
          className={`toggle-image-container ${
            currentProduct === 'product-1' ? 'active' : ''
          }`}
        >
          <img
            onClick={() => setImgCounter(1)}
            src={product1Thumbnail}
            alt="thumnail1"
            className="toggle-image"
          />
        </div>

        <div
          className={`toggle-image-container ${
            currentProduct === 'product-2' ? 'active' : ''
          }`}
        >
          <img
            onClick={() => setImgCounter(2)}
            src={product2Thumbnail}
            alt="thumnail2"
            className="toggle-image"
          />
        </div>

        <div
          className={`toggle-image-container ${
            currentProduct === 'product-3' ? 'active' : ''
          }`}
        >
          <img
            onClick={() => setImgCounter(3)}
            src={product3Thumbnail}
            alt="thumnail3"
            className="toggle-image"
          />
        </div>

        <div
          className={`toggle-image-container ${
            currentProduct === 'product-4' ? 'active' : ''
          }`}
        >
          <img
            onClick={() => setImgCounter(4)}
            src={product4Thumbnail}
            alt="thumnail4"
            className="toggle-image"
          />
        </div>
      </div>
    </div>
  )
}

export default DisplayProducts
