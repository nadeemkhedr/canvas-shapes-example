import { DEFAULT_SHAPE_FILL } from 'constants.js'
import useShapes from 'hooks/useShapes'
import styles from './AddShapesButtons.module.css'

function AddShapesButtons() {
  const { addShape } = useShapes()

  const addCircle = () => {
    addShape('circle', {
      x: 200,
      y: 200,
      radius: 50,
      fill: DEFAULT_SHAPE_FILL,
    })
  }

  const addRectangle = () => {
    addShape('rectangle', {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: DEFAULT_SHAPE_FILL,
    })
  }

  return (
    <div>
      <button type="button" className={styles.btn} onClick={addCircle}>
        Add Circle
      </button>
      <button type="button" className={styles.btn} onClick={addRectangle}>
        Add Rectangle
      </button>
    </div>
  )
}

export default AddShapesButtons
