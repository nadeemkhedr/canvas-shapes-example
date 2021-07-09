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
    shapesCopy.forEach((shape, i) => {
      // toggle selected shape
      if (index === i) {
        shape.isSelected = !shape.isSelected
      } else if (!allowMultiSelect) {
        // if allow multi is false then set all the other items to not selected
        shape.isSelected = false
      }
    })
    setShapes(shapesCopy)
  }

  const shapesContext = {
    shapes,
    addShape,
    selectShape,
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
