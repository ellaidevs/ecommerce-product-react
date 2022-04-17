import React, { useState } from 'react'
import { ReactComponent as IconDelete } from '../assets/icon-delete.svg'
import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'

function CartContent({ toggleCart, cartValue }) {
  let [toggleContent, setToggleContent] = useState(true)
  const clearCart = () => {
    setToggleContent(false)
  }

  let cartContent
  if (toggleContent) {
    console.log('trueee')
    cartContent = (
      <div className="content">
        <div className="cart-content">
          <div className="cart-product-img">
            <img src={product1Thumbnail} alt="product" />
          </div>
          <div className="cart-product-details">
            <p>Fall Limited Edition Sneakers</p>
            <p className="cart-product-price">
              $125.00 x {cartValue} <b>${125 * cartValue}.00</b>
            </p>
          </div>
          <IconDelete onClick={clearCart} className="icon-delete" />
        </div>
        <button className="btn-checkout">Checkout</button>
      </div>
    )
  } else {
    console.log('falsee')
    cartContent = <div className="content">Cart is empty</div>
  }
  return (
    <div>
      {toggleCart && (
        <div className="cart-card">
          <h4 className="cart-card-title">Cart</h4>
          {cartContent}
        </div>
      )}
    </div>
  )
}

export default CartContent
