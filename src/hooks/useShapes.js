import React, { useState, useContext } from 'react'

const ShapesContext = React.createContext({})

const ShapesProvider = ({ children }) => {
  const [shapes, setShapes] = useState([])
  const addShapeFunc = (type, shape) => {
    setShapes([
      ...shapes,
      {
        type,
        isSelected: false,
        ...shape,
      },
    ])
  }

  const shapesContext = {
    shapes: shapes,
    addShape: addShapeFunc,
    setShapes: setShapes,
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
