import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import { useState } from 'react'
import OverlayProduct from './components/OverlayProduct'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)
  let [sumOfCart, setSumOfCart] = useState(0)
  // Todo: Bring (sumOfCart) data from RightSection -> Section -> App(root) to -> NavBar -> NavbarRight ->
  return (
    <div className="App">
      <OverlayProduct
        toggleOverlay={toggleOverlay}
        setToggleOverlay={setToggleOverlay}
      />
      <NavBar sumOfCart={sumOfCart} />
      <Section
        setToggleOverlay={setToggleOverlay}
        isRoot={false}
        setSumOfCart={setSumOfCart}
      />
    </div>
  )
}

export default App
