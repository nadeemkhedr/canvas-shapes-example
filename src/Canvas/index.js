import { useEffect, useRef, useState } from 'react'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants'
import ShapeDrawer from './ShapeDrawer'
import useShapes from 'hooks/useShapes'

function Canvas() {
  const canvasRef = useRef(null)
  const [mouseLoc, setMouseLoc] = useState({ x: null, y: null })
  const { shapes } = useShapes()

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    shapes.forEach((shape) => {
      const shapeDr = new ShapeDrawer(shape, ctx)
      const isHover = shapeDr.isMouseOver(mouseLoc.x, mouseLoc.y)
      shapeDr.draw(isHover)
    })
  })

  const handleMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    setMouseLoc({ x: offsetX, y: offsetY })
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMove}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    />
  )
}

export default Canvas
