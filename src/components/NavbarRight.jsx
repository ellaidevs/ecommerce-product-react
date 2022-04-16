import React from 'react'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'

const NavbarRight = ({ sumOfCart }) => {
  const cartValue = sumOfCart.sumOfCart

  const showAddToCart = () => {
    console.log('checking showAddToCart', cartValue)
  }

  return (
    <div className="navbar-right">
      <div className="svg-cart">
        {cartValue > 0 && <div className="cart-value">{cartValue}</div>}
        <IconCart onClick={showAddToCart} className="icon-cart" />
      </div>
      <div className="avatar">
        <img src={Avatar} alt="profile" />
      </div>
    </div>
  )
}

export default NavbarRight
