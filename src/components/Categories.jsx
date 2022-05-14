import React from 'react'
import { useSelector } from 'react-redux'
import Category from './Category'

const Categories = () => {
  const toggleSidebar = useSelector((state) => state.sidebar.value)
  const mobileSideBar = useSelector((state) => state.mobileSideBar.value)

  console.log('what is is mobile sidebar', mobileSideBar)
  return (
    <div className={toggleSidebar ? 'categories' : 'hide-categories'}>
      <Category />
    </div>
  )
}

export default Categories
