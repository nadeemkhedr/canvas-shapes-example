import rectangle from './shapes/rectangle'
import circle from './shapes/circle'

class Shape {
  constructor(shapeType, shapeProps, canvasContext) {
    this.shapeType = shapeType
    switch (shapeType) {
      case 'rectangle':
        this.shapeFunctions = rectangle
        break
      case 'circle':
        this.shapeFunctions = circle
        break
      default:
        throw new Error('Unsupported shape')
    }

    this.isSelected = false
    this.shapeProps = shapeProps
    this.ctx = canvasContext
  }

  draw(isHover, isClicked) {
    this.shapeFunctions.draw(this.ctx, this.shapeProps, isHover, isClicked)
  }
}
export default Shape
