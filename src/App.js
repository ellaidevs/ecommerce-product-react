import './App.scss'
import NavBar from './components/NavBar'
import Section from './components/Section'
import Poc from './components/Poc'

function App() {
  // TODO: Add overlay product-img view when clicked on product-img. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_overlay
  // TODO: After finish overlay and other section area related work,  merge desktop-section-popup to page-section
  return (
    <div className="App">
      {/* <Poc /> */}
      <NavBar />
      <Section />
    </div>
  )
}

export default App
