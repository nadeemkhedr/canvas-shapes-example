import {
  HOVER_COLOR,
  HOVER_THICKNESS,
  CLICK_THICKNESS,
  CLICK_COLOR,
  BACKGROUND_COLOR,
} from '../../constants'
/* 
--- Circle Props ---
const CircleProps = {
  radius: Number,
  x: Number,
  y: Number,
  fill: String,
}
*/

function drawCircleWithThickness(ctx, circle, color, thickness = 0) {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.arc(circle.x, circle.y, circle.radius + thickness, 0, 2 * Math.PI)
  ctx.fill()
}

function draw(ctx, circle, isHover, isClicked) {
  if (isClicked) {
    // draw the outline for the clicked
    drawCircleWithThickness(ctx, circle, CLICK_COLOR, CLICK_THICKNESS)
    // white padding for the outline
    drawCircleWithThickness(ctx, circle, BACKGROUND_COLOR, HOVER_THICKNESS)
  }

  if (isHover) {
    drawCircleWithThickness(ctx, circle, HOVER_COLOR, HOVER_THICKNESS)
  }

  drawCircleWithThickness(ctx, circle, circle.fill)
}

const circle = {
  draw,
}
export default circle