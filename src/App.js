import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import { useState } from 'react'
import OverlayProduct from './components/OverlayProduct'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)

  return (
    <div className="App">
      <OverlayProduct setToggleOverlay={setToggleOverlay} />
      <NavBar />
      <Section setToggleOverlay={setToggleOverlay} isRoot={false} />
    </div>
  )
}
//? Todo: Redux implementation
//! setToggleOverlay --> Section --> LeftSection --> DisplayProducts
//! setToggleOverlay --> OverlayProduct --> DisplayProducts
//! toggleOverlay -->  OverlayProduct

export default App
