import { useEffect, useRef, useState } from 'react'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from 'constants.js'
import ShapeDrawer from 'ShapeDrawer'
import useShapes from 'hooks/useShapes'
import useDraggableShapes from 'hooks/useDraggableShapes'

function Canvas({ className }) {
  const canvasRef = useRef(null)
  const [mouseLoc, setMouseLoc] = useState({ x: null, y: null })

  const { shapes, selectShape } = useShapes()
  const {
    handleDragMouseDown,
    handleDragMouseMove,
    resetMoveStatus,
    isMoving,
  } = useDraggableShapes()

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // draw all shapes
    shapes.forEach((shape) => {
      new ShapeDrawer(shape).draw(ctx)
    })

    // after drawing all shapes the hover should be on top to show outline for all shapes
    const hoveredShapeIndex = getMouseOverShapeIndex(
      shapes,
      mouseLoc.x,
      mouseLoc.y
    )
    if (hoveredShapeIndex >= 0) {
      new ShapeDrawer(shapes[hoveredShapeIndex]).drawHover(ctx)
    }

    // selected outline is on top to indicate the selected shapes
    shapes
      .filter((shape) => shape.isSelected)
      .forEach((shape) => {
        new ShapeDrawer(shape).drawSelectOutline(ctx)
      })
  })

  const handleMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    setMouseLoc({ x: offsetX, y: offsetY })
    handleDragMouseMove(e)
  }

  const handleUp = (e) => {
    const { offsetX, offsetY } = e.nativeEvent

    // don't select/de-select anything if we moved a shape
    if (!isMoving) {
      const selectedShapeIndex = getMouseOverShapeIndex(
        shapes,
        offsetX,
        offsetY
      )
      selectShape(selectedShapeIndex, e.shiftKey)
    }
    resetMoveStatus()
  }

  return (
    <canvas
      className={className}
      ref={canvasRef}
      onMouseDown={handleDragMouseDown}
      onMouseUp={handleUp}
      onMouseMove={handleMove}
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
