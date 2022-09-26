import React from 'react'
import { ReactComponent as CancelIcon } from '../assets/icon-close.svg'
import { useDispatch } from 'react-redux'
import { setToggleSidebar } from '../redux/sidebar'
import { setToggleMobileSideBar } from '../redux/mobileSideBar'

function Category(props) {
  const dispatch = useDispatch()

  console.log('test 1')
  console.log('test 2')
  console.log('test 3')

  const fireNavCancelIcon = () => {
    dispatch(setToggleSidebar())
    dispatch(setToggleMobileSideBar())
  }
  return (
    <div className="categories">
      <CancelIcon className="nav-close-icon" onClick={fireNavCancelIcon} />
      <h3>
        <a href="/" className="category-link-tag">
          Collections
        </a>
      </h3>
      <h3>
        <a href="/" className="category-link-tag">
          Men
        </a>
      </h3>
      <h3>
        <a href="/" className="category-link-tag">
          Women
        </a>
      </h3>
      <h3>
        <a href="/" className="category-link-tag">
          About
        </a>
      </h3>
      <h3>
        <a href="/" className="category-link-tag">
          Contact
        </a>
      </h3>
      {/* <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3> */}
    </div>
  )
}

export default Category
