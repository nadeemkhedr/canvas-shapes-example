import {
  HOVER_COLOR,
  HOVER_THICKNESS,
  CLICK_THICKNESS,
  CLICK_GAP,
  CLICK_COLOR,
} from 'constants.js'
/* 
--- Circle Props ---
const CircleProps = {
  type: 'circle',
  radius: Number,
  x: Number,
  y: Number,
  fill: String,
}
*/

function draw(ctx, circle) {
  ctx.beginPath()
  ctx.fillStyle = circle.color
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
  ctx.fill()
}

function drawHover(ctx, circle) {
  ctx.globalAlpha = 0.7
  drawCircleOutline(ctx, circle, HOVER_COLOR, HOVER_THICKNESS, 0)
  ctx.globalAlpha = 1
}

function drawSelectOutline(ctx, circle) {
  drawCircleOutline(ctx, circle, CLICK_COLOR, CLICK_THICKNESS, CLICK_GAP)
}

function isMouseOver(circle, x, y) {
  return (
    Math.round(
      Math.sqrt(Math.pow(x - circle.x, 2) + Math.pow(y - circle.y, 2))
    ) <= circle.radius
  )
}

// TODO: figure out why I need to add 5px to align the outline perfectly with the shape
function drawCircleOutline(ctx, circle, color, thickness, gap) {
  ctx.beginPath()
  ctx.arc(circle.x, circle.y, circle.radius + gap + 5, 0, 2 * Math.PI)
  ctx.strokeStyle = color
  ctx.lineWidth = thickness
  ctx.stroke()
}

const circle = {
  draw,
  drawHover,
  drawSelectOutline,
  isMouseOver,
}
export default circle
