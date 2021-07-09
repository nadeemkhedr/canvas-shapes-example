import { useEffect, useRef } from 'react'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants'
import Shape from 'Shape'

function Canvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT

    const ctx = canvas.getContext('2d')

    const custom = new Shape(
      'rectangle',
      {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: 'black',
      },
      ctx
    )

    const customCircle = new Shape(
      'circle',
      {
        x: 300,
        y: 300,
        radius: 50,
        fill: 'black',
      },
      ctx
    )

    custom.draw()
    customCircle.draw()
  }, [])

  const handleMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent

    const ctx = canvasRef.current.getContext('2d')
    // clear and redraw
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    const custom = new Shape(
      'rectangle',
      {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: 'black',
      },
      ctx
    )

    const customCircle = new Shape(
      'circle',
      {
        x: 300,
        y: 300,
        radius: 50,
        fill: 'black',
      },
      ctx
    )

    const isCustomHover = custom.isMouseOver(offsetX, offsetY)
    custom.draw(isCustomHover)

    const isCustomCircleHover = customCircle.isMouseOver(offsetX, offsetY)
    customCircle.draw(isCustomCircleHover)
  }

  return <canvas ref={canvasRef} onMouseMove={handleMove} />
}

export default Canvas
