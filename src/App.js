import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import { useState } from 'react'
import OverlayProduct from './components/OverlayProduct'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)

  return (
    <div className="App">
      <OverlayProduct
        toggleOverlay={toggleOverlay}
        setToggleOverlay={setToggleOverlay}
      />
      <NavBar />
      <Section setToggleOverlay={setToggleOverlay} isRoot={false} />
    </div>
  )
}

export default App
