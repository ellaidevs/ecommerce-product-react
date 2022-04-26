import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import { useState } from 'react'
import OverlayProduct from './components/OverlayProduct'

function App() {
  let [toggleOverlay, setToggleOverlay] = useState(false)

  // Todo: Bring (sumOfCart) data from RightSection -> Section -> App(root) to -> NavBar -> NavbarRight -> AddToCart -> CartContent //This state is being passed via many layers of components. Also, this state is value is updated in two-way direction. The developer have decided to make use of Redux for this case to reduce complexity state management.
  // Todo: apply redux for this case
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
