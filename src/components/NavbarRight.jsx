import React from 'react'
import { ReactComponent as IconCart } from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'

const NavbarRight = ({ sumOfCart }) => {
  const showAddToCart = (x) => {
    console.log('checking showAddToCart', sumOfCart)
  }

  return (
    <div className="navbar-right">
      <div className="svg-cart">
        {sumOfCart.sumOfCart > 0 && (
          <div className="cart-value">{sumOfCart.sumOfCart}</div>
        )}
        <IconCart onClick={() => showAddToCart('test')} className="icon-cart" />
      </div>
      <div className="avatar">
        <img src={Avatar} alt="profile" />
      </div>
    </div>
  )
}

export default NavbarRight
