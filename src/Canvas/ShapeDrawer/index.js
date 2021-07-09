import rectangle from './shapes/rectangle'
import circle from './shapes/circle'

class ShapeDrawer {
  constructor(shapeProps, canvasContext) {
    switch (shapeProps.type) {
      case 'rectangle':
        this.shapeFunctions = rectangle
        break
      case 'circle':
        this.shapeFunctions = circle
        break
      default:
        throw new Error('Unsupported shape')
    }

    this.shapeProps = shapeProps
    this.ctx = canvasContext
  }

  draw(isHover) {
    this.shapeFunctions.draw(
      this.ctx,
      this.shapeProps,
      isHover,
      this.shapeProps.isSelected
    )
  }

  isMouseOver(x, y) {
    return this.shapeFunctions.isMouseOver(this.shapeProps, x, y)
  }
}
export default ShapeDrawer
