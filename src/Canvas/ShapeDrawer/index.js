import rectangle from './shapes/rectangle'
import circle from './shapes/circle'

class ShapeDrawer {
  constructor(shapeProps) {
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
  }

  draw(ctx, isHover) {
    this.shapeFunctions.draw(
      ctx,
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
