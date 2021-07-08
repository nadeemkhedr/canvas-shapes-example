import { useEffect, useRef } from 'react'
import Shape from 'Shape'

function Canvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 500
    canvas.height = 500

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

    custom.draw(true, true)
    customCircle.draw(false, true)
  }, [])

  return <canvas ref={canvasRef} />
}

export default Canvas
