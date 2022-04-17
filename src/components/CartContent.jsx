import React from 'react'
import { ReactComponent as IconDelete } from '../assets/icon-delete.svg'
import product1Thumbnail from '../assets/image-product-1-thumbnail.jpg'

function CartContent({ toggleCart }) {
  return (
    <div>
      {toggleCart && (
        <div className="cart-card">
          <h4 className="cart-card-title">Cart</h4>
          <div className="cart-content">
            <div className="cart-product-img">
              <img src={product1Thumbnail} alt="product" />
            </div>
            <div className="cart-product-details">
              <p>Fall Limited Edition Sneakers</p>
              <p className="cart-product-price">
                $125.00 x 3 <b>$375.00</b>
              </p>
            </div>
            <IconDelete />
          </div>
          <button className="btn-checkout">Checkout</button>
        </div>
      )}
    </div>
  )
}

export default CartContent
