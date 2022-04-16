import React from 'react'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'

const NavbarRight = (sumOfCart) => {
  const showAddToCart = (x) => {
    console.log('checking showAddToCart', sumOfCart)
  }
  return (
    <div className="navbar-right">
      <div className="svg-cart">
        <div className="cart-value">0</div>
        <IconCart onClick={() => showAddToCart('test')} className="icon-cart" />
      </div>
      <div className="avatar">
        <img src={Avatar} alt="profile" />
      </div>
    </div>
  )
}

export default NavbarRight
