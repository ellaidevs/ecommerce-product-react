import React from 'react'
import Avatar from '../assets/image-avatar.png'
import AddToCart from './AddToCart'

const NavbarRight = ({ sumOfCart }) => {
  return (
    <div className="navbar-right">
      <AddToCart sumOfCart={sumOfCart} />
      <div className="avatar">
        <img src={Avatar} alt="profile" />
      </div>
    </div>
  )
}

export default NavbarRight
