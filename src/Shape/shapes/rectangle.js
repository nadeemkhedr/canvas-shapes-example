import {
  HOVER_COLOR,
  HOVER_THICKNESS,
  CLICK_THICKNESS,
  CLICK_COLOR,
  BACKGROUND_COLOR,
} from '../../constants'
/* 
--- Rectangle Props ---
const RectangleProps = {
  width: Number,
  height: Number,
  x: Number,
  y: Number,
  fill: String,
}
*/

function drawRectangleWithThickness(ctx, rect, color, thickness = 0) {
  ctx.fillStyle = color
  ctx.fillRect(
    rect.x - thickness,
    rect.y - thickness,
    rect.width + thickness * 2,
    rect.height + thickness * 2
  )
}

function draw(ctx, rect, isHover, isClicked) {
  if (isClicked) {
    // draw the outline for the clicked
    drawRectangleWithThickness(ctx, rect, CLICK_COLOR, CLICK_THICKNESS)
    // white padding for the outline
    drawRectangleWithThickness(ctx, rect, BACKGROUND_COLOR, HOVER_THICKNESS)
  }

  if (isHover) {
    drawRectangleWithThickness(ctx, rect, HOVER_COLOR, HOVER_THICKNESS)
  }

  drawRectangleWithThickness(ctx, rect, rect.fill)
}

function isMouseOver(rect, x, y) {
  return (
    x >= rect.x &&
    x <= rect.x + rect.width &&
    y >= rect.y &&
    y <= rect.y + rect.height
  )
}

const rectangle = {
  draw,
  isMouseOver,
}
export default rectangle
