import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import OverlayProduct from './components/OverlayProduct'

function App() {
  return (
    <div className="App">
      <OverlayProduct />
      <NavBar />
      <hr />
      <Section />
    </div>
  )
}

export default App
