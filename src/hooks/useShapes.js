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

  const updateShape = (index, updatedShape) => {
    const updatedShapes = shapes.map((shape, i) => {
      return i === index ? updatedShape : shape
    })
    setShapes(updatedShapes)
  }

  const deleteShape = (index) => {
    const updatedShapes = []
    shapes.forEach((shape, i) => {
      if (i !== index) {
        updatedShapes.push(shape)
      }
    })
    setShapes(updatedShapes)
  }

  const selectShape = (index, allowMultiSelect) => {
    // deep clone the array (TODO use something like immer)
    const shapesCopy = shapes.map((shape) => {
      return { ...shape }
    })
    // if there is an index, then move selected item to last
    // so it would be on top in the canvas
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
    const updatedShapes = shapes.map((shape) => {
      if (shape.isSelected) {
        return {
          ...shape,
          x: shape.x + dx,
          y: shape.y + dy,
        }
      }
      return shape
    })
    setShapes(updatedShapes)
  }

  const shapesContext = {
    shapes,
    addShape,
    updateShape,
    deleteShape,
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
