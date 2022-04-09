import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import Poc from './components/Poc'
import { useState } from 'react'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)
  let [mainProduct, setMainProduct] = useState('')

  const handleOverlayToggle = () => {
    setToggleOverlay((toggleOverlay = !toggleOverlay))
  }
  return (
    <div className="App">
      {toggleOverlay && (
        <div className="overlay" onClick={handleOverlayToggle}>
          This is where
        </div>
      )}
      <NavBar />
      <Section
        setToggleOverlay={setToggleOverlay}
        setMainProduct={setMainProduct}
      />
    </div>
  )
}

export default App
