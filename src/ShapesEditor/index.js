import useShapes from 'hooks/useShapes'

import ShapePropertyEditor from './ShapePropertyEditor'

function ShapesEditor({ className }) {
  const { shapes, updateShape, deleteShape } = useShapes()
  // convert shapes to filtered array of index, selectedShapes
  // we wouldn't need that if there are id's for shapes
  const selectedShapes = shapes.reduce((acc, val, index) => {
    if (val.isSelected) {
      acc.push([index, val])
    }
    return acc
  }, [])

  return (
    <div className={className}>
      {selectedShapes.map(([index, shape]) => (
        <ShapePropertyEditor
          key={index}
          index={index}
          shape={shape}
          onDelete={() => deleteShape(index)}
          onChange={(updatedShape) => {
            updateShape(index, updatedShape)
          }}
        />
      ))}
    </div>
  )
}

export default ShapesEditor
