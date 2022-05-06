import React, { useState } from 'react'
import Categories from './Categories'
import NavbarRight from './NavbarRight'
import { ReactComponent as HamburgerMenu } from '../assets/icon-menu.svg'
const NavBar = () => {
  // ! TODO 7th May 2022
  // TODO: 3. Toggle categories display when clicked on hamburger menu. 4. When the categories is displayed at mobile view, handle the scss to display the categories as sidebar.
  // TODO: Once completed mobile navbar, merge mobile-nav -> staging

  let [toggleSideBar, setToggleSideBar] = useState(false)

  const handleSidebar = () => {
    console.log('side bar clicked')
    setToggleSideBar(!toggleSideBar)
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
