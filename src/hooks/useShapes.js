import React, { useState, useContext } from 'react'

const ShapesContext = React.createContext({})

const ShapesProvider = ({ children }) => {
  const [shapes, setShapes] = useState([])

  const addShape = (type, shape) => {
    setShapes([
      ...shapes,
      {
        type,
        isSelected: false,
        ...shape,
      },
    ])
  }

  const selectShape = (index, allowMultiSelect) => {
    const shapesCopy = [...shapes]
    // if there is an index, then move selected item to last
    // it would be on top in the canvas
    let selectedShape = null
    if (index >= 0) {
      selectedShape = shapesCopy.splice(index, 1)[0]
      selectedShape.isSelected = !selectedShape.isSelected
    }
    if (!allowMultiSelect) {
      shapesCopy.forEach((shape) => {
        shape.isSelected = false
      })
    }
    if (selectedShape) {
      shapesCopy.push(selectedShape)
    }
    setShapes(shapesCopy)
  }

  const moveSelectedShapes = (dx, dy) => {
    const shapesCopy = [...shapes]
    shapesCopy
      .filter((shape) => shape.isSelected)
      .forEach((shape) => {
        shape.x += dx
        shape.y += dy
      })
  }

  const shapesContext = {
    shapes,
    addShape,
    selectShape,
    moveSelectedShapes,
  }

  return (
    <ShapesContext.Provider value={shapesContext}>
      {children}
    </ShapesContext.Provider>
  )
}

const useShapes = () => useContext(ShapesContext)

export { ShapesProvider }
export default useShapes
