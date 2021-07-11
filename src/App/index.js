import { ShapesProvider } from 'hooks/useShapes'

import AddShapesButtons from 'AddShapesButtons'
import Canvas from '../Canvas'
import ShapesEditor from '../ShapesEditor'

import styles from './App.module.css'

function App() {
  return (
    <ShapesProvider>
      <div className={styles.container}>
        <AddShapesButtons />
        <Canvas className={styles.canvas} />
        <ShapesEditor className={styles.shapesEditor} />
      </div>
    </ShapesProvider>
  )
}

export default App
