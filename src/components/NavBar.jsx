import React from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'
import { ReactComponent as HamburgerMenu } from '../assets/icon-menu.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'
import { setToggleMobileSideBar } from '../redux/mobileSideBar'
const NavBar = () => {
  // ! TODO 14th May 2022
  // TODO: 1. Fix margin issue of categories when mobile nav sidebar is activated.
  // TODO: Once completed mobile navbar, merge mobile-nav -> staging

  const dispatch = useDispatch()
  const sidebarToggle = useSelector((state) => state.sidebar.value)

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
      <hr />
    </div>
  )
}

export default NavBar
