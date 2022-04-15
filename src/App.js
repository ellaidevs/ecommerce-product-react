import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import Poc from './components/Poc'
import { useState } from 'react'
import DisplayProducts from './components/DisplayProducts'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)
  let [isRoot, setIsRoot] = useState(false)

  return (
    <div className="App">
      {toggleOverlay && (
        <div className="overlay">
          <div className="left">
            <DisplayProducts
              isRoot={true}
              setToggleOverlay={setToggleOverlay}
            />
          </div>
        </div>
      )}

      <NavBar />
      <Section setToggleOverlay={setToggleOverlay} isRoot={isRoot} />
    </div>
  )
}

export default App
