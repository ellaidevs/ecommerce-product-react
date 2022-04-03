import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import Poc from './components/Poc'
import { useState } from 'react'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)
  // TODO: Add overlay product-img view when clicked on product-img. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay
  // TODO: After finish overlay and other section area related work,  merge desktop-section-popup to page-section
  const handleOverlayToggle = () => {
    setToggleOverlay((toggleOverlay = !toggleOverlay))
  }
  return (
    <div className="App">
      {toggleOverlay && (
        <div className="overlay" onClick={handleOverlayToggle}>
          testtest
        </div>
      )}
      <NavBar />
      <Section setToggleOverlay={setToggleOverlay} />
    </div>
  )
}

export default App
