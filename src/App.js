import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import OverlayProduct from './components/OverlayProduct'

function App() {
  return (
    <div className="App">
      <OverlayProduct />
      <NavBar />
      <Section isRoot={false} />
    </div>
  )
}
//? Todo: Redux implementation
//! setToggleOverlay --> Section --> LeftSection --> DisplayProducts
//! setToggleOverlay --> OverlayProduct --> DisplayProducts
//! toggleOverlay -->  OverlayProduct

export default App
