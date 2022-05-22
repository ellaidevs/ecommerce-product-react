import React from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'
import { ReactComponent as HamburgerMenu } from '../assets/icon-menu.svg'
import { useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'
import { setToggleMobileSideBar } from '../redux/mobileSideBar'
const NavBar = () => {
  const dispatch = useDispatch()

  const fireHamburgerMenu = () => {
    dispatch(setToggleSidebar())
    dispatch(setToggleMobileSideBar())
  }
  return (
    <div className="nav">
      <div className="container">
        <HamburgerMenu onClick={fireHamburgerMenu} className="hamburger-menu" />
        <h1 className="nav-title">sneakers</h1>
        <Categories />
        <NavbarRight />
      </div>
    </div>
  )
}

export default NavBar
