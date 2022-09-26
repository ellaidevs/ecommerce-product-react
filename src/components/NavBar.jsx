import React from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'
import { ReactComponent as HamburgerMenu } from '../assets/icon-menu.svg'
import { useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'
import { setToggleMobileSideBar } from '../redux/mobileSideBar'
import logo from '../assets/soleMate.png'

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
        <div className="website-logo-container">
          <div className="logo-img-container">
            <img src={logo} className="logo-img" alt="website-logo" />
            <h2 className="nav-title">Sole Mates</h2>
          </div>
        </div>

        <Categories />
        <NavbarRight />
      </div>
    </div>
  )
}

export default NavBar
