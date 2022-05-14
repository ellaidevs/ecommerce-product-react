import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as CancelIcon } from '../assets/icon-close.svg'

const Categories = () => {
  const toggleSidebar = useSelector((state) => state.sidebar.value)
  return (
    <div className={toggleSidebar ? 'categories' : 'hide-categories'}>
      <CancelIcon className="nav-close-icon" />
      <h3>Collections</h3>
      <h3>Men</h3>
      <h3>Women</h3>
      <h3>About</h3>
      <h3>Contact</h3>
    </div>
  )
}

export default Categories
