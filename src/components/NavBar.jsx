import React from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'
import { ReactComponent as HamburgerMenu } from '../assets/icon-menu.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'
const NavBar = () => {
  // ! TODO 7th May 2022
  // TODO: 1.Add X svg to categories. 2. Hide X button at web and position relative. 3.make other categories add margin-top when X svg appear at mobile
  // TODO 4. Add proper style for sidebar
  // TODO: Once completed mobile navbar, merge mobile-nav -> staging

  const dispatch = useDispatch()
  const sidebarToggle = useSelector((state) => state.sidebar.value)

  console.log('sidebarToggle', sidebarToggle)
  return (
    <div className="nav">
      <div className="container">
        <HamburgerMenu
          onClick={() => dispatch(setToggleSidebar())}
          className="hamburger-menu"
        />
        <h1 className="nav-title">sneakers</h1>
        <Categories />
        <NavbarRight />
      </div>
      <hr />
    </div>
  )
}

export default NavBar
