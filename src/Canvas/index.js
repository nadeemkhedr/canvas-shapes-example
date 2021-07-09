import { useEffect, useRef, useState } from 'react'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants'
import ShapeDrawer from './ShapeDrawer'
import useShapes from 'hooks/useShapes'

function Canvas() {
  const canvasRef = useRef(null)
  const [mouseLoc, setMouseLoc] = useState({ x: null, y: null })
  const { shapes, selectShape } = useShapes()

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    const hoveredShapeIndex = getMouseOverShapeIndex(
      shapes,
      mouseLoc.x,
      mouseLoc.y
    )
    shapes.forEach((shape, i) => {
      const isHover = i === hoveredShapeIndex
      new ShapeDrawer(shape).draw(ctx, isHover)
    })
  })

  const handleMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    setMouseLoc({ x: offsetX, y: offsetY })
  }

  const handleSelect = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    const selectedShapeIndex = getMouseOverShapeIndex(shapes, offsetX, offsetY)
    selectShape(selectedShapeIndex, e.shiftKey)
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMove}
      onClick={handleSelect}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    />
  )
}

// returns the shape that the mouse is over
// will only retun 1 shape by desc order
function getMouseOverShapeIndex(shapes, x, y) {
  for (let index = shapes.length - 1; index >= 0; index--) {
    if (new ShapeDrawer(shapes[index]).isMouseOver(x, y)) {
      return index
    }
  }
  return -1
}

export default Canvas
