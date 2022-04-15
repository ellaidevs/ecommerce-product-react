import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import { useState } from 'react'
import DisplayProducts from './components/DisplayProducts'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)

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
      <Section setToggleOverlay={setToggleOverlay} isRoot={false} />
    </div>
  )
}

export default App
