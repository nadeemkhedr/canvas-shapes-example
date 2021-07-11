import {
  HOVER_COLOR,
  HOVER_THICKNESS,
  CLICK_THICKNESS,
  CLICK_GAP,
  CLICK_COLOR,
} from 'constants.js'
/* 
--- Rectangle Props ---
const RectangleProps = {
  type: 'rectangle',
  width: Number,
  height: Number,
  x: Number,
  y: Number,
  fill: String,
}
*/

function draw(ctx, rect) {
  const topLeftX = rect.x - rect.width / 2
  const topLeftY = rect.y - rect.height / 2
  ctx.fillStyle = rect.fill

  ctx.fillRect(topLeftX, topLeftY, rect.width, rect.height)
}

function drawHover(ctx, rect) {
  ctx.globalAlpha = 0.7
  drawRectangleOutline(ctx, rect, HOVER_COLOR, HOVER_THICKNESS, 0)
  ctx.globalAlpha = 1
}

function drawSelectOutline(ctx, rect) {
  drawRectangleOutline(ctx, rect, CLICK_COLOR, CLICK_THICKNESS, CLICK_GAP)
}

function isMouseOver(rect, x, y) {
  return (
    x >= rect.x - rect.width / 2 &&
    x <= rect.x + rect.width / 2 &&
    y >= rect.y - rect.width / 2 &&
    y <= rect.y + rect.height / 2
  )
}

// TODO: figure out why I need to add 5px to align the outline perfectly with the shape
function drawRectangleOutline(ctx, rect, color, thickness, gap) {
  const topLeftX = rect.x - rect.width / 2
  const topLeftY = rect.y - rect.height / 2

  ctx.lineWidth = thickness
  ctx.strokeStyle = color
  ctx.strokeRect(
    topLeftX - thickness - gap + 5,
    topLeftY - thickness - gap + 5,
    rect.width + (thickness + gap) * 2 - 10,
    rect.height + (thickness + gap) * 2 - 10
  )
}

const rectangle = {
  draw,
  drawHover,
  drawSelectOutline,
  isMouseOver,
}
export default rectangle
