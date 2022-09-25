import React from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'
import { ReactComponent as HamburgerMenu } from '../assets/icon-menu.svg'
import { useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'
import { setToggleMobileSideBar } from '../redux/mobileSideBar'
import 'animate.css'
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
        <h2 className="nav-title">Sole Mates</h2>
        <Categories />
        <NavbarRight />
      </div>
    </div>
  )
}

export default NavBar
