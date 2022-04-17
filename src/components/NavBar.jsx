import React from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'

const NavBar = (sumOfCart) => {
  return (
    <div className="nav">
      <div className="container">
        <h1 className="nav-title">sneakers</h1>
        <Categories />
        <NavbarRight sumOfCart={sumOfCart} />
      </div>
      <hr />
    </div>
  )
}

export default NavBar
