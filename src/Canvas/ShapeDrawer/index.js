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

  draw(ctx) {
    this.shapeFunctions.draw(ctx, this.shapeProps, this.shapeProps.isSelected)
  }

  drawHover(ctx) {
    this.shapeFunctions.drawHover(ctx, this.shapeProps)
  }

  drawSelectOutline(ctx) {
    this.shapeFunctions.drawSelectOutline(ctx, this.shapeProps)
  }

  isMouseOver(x, y) {
    return this.shapeFunctions.isMouseOver(this.shapeProps, x, y)
  }
}
export default ShapeDrawer
