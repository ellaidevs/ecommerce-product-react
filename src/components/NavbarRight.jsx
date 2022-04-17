import React, { useState } from 'react'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'

const NavbarRight = ({ sumOfCart }) => {
  let [toggleCart, setToggleCart] = useState(false)
  const cartValue = sumOfCart.sumOfCart

  const showAddToCart = () => {
    console.log('checking showAddToCart', cartValue)
    setToggleCart((toggleCart = !toggleCart))
  }

  return (
    <div className="navbar-right">
      <div className="svg-cart">
        {cartValue > 0 && <div className="cart-value">{cartValue}</div>}
        <IconCart onClick={showAddToCart} className="icon-cart" />
        {toggleCart && (
          <div className="cart-card">
            <h4 className="cart-card-title">Cart</h4>
            <div className="cart-content">
              <img src="" alt="product" />
              <div className="cart-product-details">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 x 3</p>
              </div>
            </div>
            <button className="btn-checkout">Checkout</button>
          </div>
        )}
      </div>
      <div className="avatar">
        <img src={Avatar} alt="profile" />
      </div>
    </div>
  )
}

export default NavbarRight
