import React from 'react'
import { ReactComponent as CancelIcon } from '../assets/icon-close.svg'
import { useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'

function Category(props) {
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <CancelIcon
        className="nav-close-icon"
        onClick={() => dispatch(setToggleSidebar())}
      />
      <h3>Collections</h3>
      <h3>Men</h3>
      <h3>Women</h3>
      <h3>About</h3>
      <h3>Contact</h3>
    </div>
  )
}

export default Category
