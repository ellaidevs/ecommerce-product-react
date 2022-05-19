import React from 'react'
import { ReactComponent as CancelIcon } from '../assets/icon-close.svg'
import { useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'
import { setToggleMobileSideBar } from '../redux/mobileSideBar'

function Category(props) {
  const dispatch = useDispatch()

  const fireNavCancelIcon = () => {
    dispatch(setToggleSidebar())
    dispatch(setToggleMobileSideBar())
  }
  return (
    <div className="categories">
      <CancelIcon className="nav-close-icon" onClick={fireNavCancelIcon} />
      <h3>Collections</h3>
      <h3>Men</h3>
      <h3>Women</h3>
      <h3>About</h3>
      <h3>Contact</h3>
    </div>
  )
}

export default Category
