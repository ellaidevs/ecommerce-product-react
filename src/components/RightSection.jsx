import React, { useState, useEffect } from 'react'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import { ReactComponent as IconMinus } from '../assets/icon-minus.svg'
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg'
import Swal from '../sweetalert'
var at = require('lodash/at')
var _sum = require('lodash/fp/sum')

const RightSection = () => {
  let [counter, setCounter] = useState(0)
  let [cart, setCart] = useState([])
  let [sumOfCart, setSumOfCart] = useState(0)

  const fireCounter = (counterType) => {
    if (counterType === 'plus') {
      setCounter(++counter)
    } else if (counter > 0) {
      setCounter(--counter)
    }
  }

  const addToCart = () => {
    if (counter > 0) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 2500,
      })
      setCart(cart.concat(counter))
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please select product before adding to cart',
        showConfirmButton: false,
        timer: 2500,
      })
    }
    setCounter((counter = 0))
  }

  useEffect(() => {
    setSumOfCart((sumOfCart = _sum(cart))) //! Note: will use useRef in future development after studying useRef.
    console.log('sumOfCart', sumOfCart)
  }, [cart])

  return (
    <div className="right">
      <h4>SNEAKER COMPANY</h4>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <div className="price-inline">
          <h2 className="price-tag">$125.00</h2>
          <h5 className="discount-tag">50%</h5>
        </div>
        <div>
          <h5 className="before-discount">$250.00</h5>
        </div>
      </div>
      <div className="cart-container">
        <div className="counter">
          <div className="decrement" onClick={() => fireCounter('minus')}>
            <IconMinus />
          </div>
          <div className="number">{counter}</div>
          <div className="increment" onClick={() => fireCounter('plus')}>
            <IconPlus />
          </div>
        </div>
        <div className="addToCartBtn">
          <button onClick={() => addToCart()}>
            <IconCart className="btn-cart-svg" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightSection
