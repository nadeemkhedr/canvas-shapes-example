import useShapes from 'hooks/useShapes'

function AddShapesButtons() {
  const { addShape } = useShapes()

  const addCircle = () => {
    addShape('circle', {
      x: 300,
      y: 300,
      radius: 50,
      fill: 'black',
    })
  }

  const addRectangle = () => {
    addShape('rectangle', {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fill: 'black',
    })
  }

  return (
    <div>
      <button type="button" onClick={addCircle}>
        Add Circle
      </button>
      <button type="button" onClick={addRectangle}>
        Add Rectangle
      </button>
    </div>
  )
}

export default AddShapesButtons
