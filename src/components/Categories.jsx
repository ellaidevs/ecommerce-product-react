import React from 'react'
import { useSelector } from 'react-redux'
import Category from './Category'

const Categories = () => {
  const toggleSidebar = useSelector((state) => state.sidebar.value)
  return (
    <div className={toggleSidebar ? 'categories' : 'hide-categories'}>
      <Category />
    </div>
  )
}

export default Categories
