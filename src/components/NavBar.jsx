import React from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'
import { ReactComponent as HamburgerMenu } from '../assets/icon-menu.svg'
const NavBar = () => {
  const handleSidebar = () => {
    console.log('side bar clicked')
  }
  return (
    <div className="nav">
      <div className="container">
        <HamburgerMenu onClick={handleSidebar} className="hamburger-menu" />
        <h1 className="nav-title">sneakers</h1>
        <Categories />
        <NavbarRight />
      </div>
      <hr />
    </div>
  )
}

export default NavBar
