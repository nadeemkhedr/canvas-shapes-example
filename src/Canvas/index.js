import { useEffect, useRef, useState } from 'react'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants'
import ShapeDrawer from './ShapeDrawer'
import useShapes from 'hooks/useShapes'

function Canvas() {
  const canvasRef = useRef(null)
  const [mouseLoc, setMouseLoc] = useState({ x: null, y: null })
  const [moveStatus, setMoveStatus] = useState({
    status: null,
    x: null,
    y: null,
  })

  const { shapes, selectShape, moveSelectedShapes } = useShapes()

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

  const handleDown = (e) => {
    // only care if mouse down is on a selected shape
    const { offsetX, offsetY } = e.nativeEvent
    const isDownOverSelectedShape = shapes
      .filter((shape) => shape.isSelected)
      .some((shape) => new ShapeDrawer(shape).isMouseOver(offsetX, offsetY))

    if (isDownOverSelectedShape) {
      setMoveStatus({
        status: 'DOWN_SELECTED',
        x: offsetX,
        y: offsetY,
      })
    }
  }

  const handleMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    if (moveStatus.status === 'DOWN_SELECTED' || moveStatus.status === 'MOVE') {
      // get delta
      const dx = offsetX - moveStatus.x
      const dy = offsetY - moveStatus.y

      moveSelectedShapes(dx, dy)

      setMoveStatus({
        status: 'MOVE',
        x: offsetX,
        y: offsetY,
      })
    }

    setMouseLoc({ x: offsetX, y: offsetY })
  }

  const handleUp = (e) => {
    const { offsetX, offsetY } = e.nativeEvent

    // don't select/de-select anything if we moved a shape
    if (moveStatus.status !== 'MOVE') {
      const selectedShapeIndex = getMouseOverShapeIndex(
        shapes,
        offsetX,
        offsetY
      )
      selectShape(selectedShapeIndex, e.shiftKey)
    }

    setMoveStatus({
      status: null,
      x: null,
      y: null,
    })
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleDown}
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
