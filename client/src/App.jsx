import CanvasModel from "./canvas/CanvasModel"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}

export default App
