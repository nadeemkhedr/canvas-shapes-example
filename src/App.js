import './App.css'
import { ShapesProvider } from 'hooks/useShapes'

import AddShapesButtons from 'AddShapesButtons'
import Canvas from './Canvas'

function App() {
  return (
    <ShapesProvider>
      <AddShapesButtons />
      <Canvas />
    </ShapesProvider>
  )
}

export default App
