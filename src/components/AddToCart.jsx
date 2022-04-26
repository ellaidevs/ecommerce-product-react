import React, { useState } from 'react'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import CartContent from './CartContent'
import { useSelector } from 'react-redux'

function AddToCart() {
  const cartValue = useSelector((state) => state.cart.value)
  let [toggleCart, setToggleCart] = useState(false)

  const showAddToCart = () => {
    // console.log('checking showAddToCart', cartValue)
    setToggleCart((toggleCart = !toggleCart))
  }

  return (
    <div className="svg-cart">
      {cartValue > 0 && <div className="cart-value">{cartValue}</div>}
      <IconCart onClick={showAddToCart} className="icon-cart" />
      <CartContent toggleCart={toggleCart} />
    </div>
  )
}

export default AddToCart
