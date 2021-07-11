import { useState } from 'react'
import ShapeDrawer from 'ShapeDrawer'
import useShapes from './useShapes'

function useDraggableShapes() {
  const { shapes, moveSelectedShapes } = useShapes()
  const [moveStatus, setMoveStatus] = useState({
    status: null,
    x: null,
    y: null,
  })

  const handleDragMouseDown = (e) => {
    // only care if mouse down is on a selected shape
    const { offsetX, offsetY } = e.nativeEvent
    const isDownOverSelectedShape = shapes
      .filter((shape) => shape.isSelected)
      .some((shape) => new ShapeDrawer(shape).isMouseOver(offsetX, offsetY))

    if (isDownOverSelectedShape) {
      setMoveStatus({
        status: 'DOWN_SELECTED',
        x: offsetX,
        y: offsetY,
      })
    }
  }

  const handleDragMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent
    if (moveStatus.status === 'DOWN_SELECTED' || moveStatus.status === 'MOVE') {
      // get delta
      const dx = offsetX - moveStatus.x
      const dy = offsetY - moveStatus.y

      moveSelectedShapes(dx, dy)

      setMoveStatus({
        status: 'MOVE',
        x: offsetX,
        y: offsetY,
      })
    }
  }

  return {
    handleDragMouseDown,
    handleDragMouseMove,
    isMoving: moveStatus.status === 'MOVE',
    resetMoveStatus: () => {
      setMoveStatus({
        status: null,
        x: null,
        y: null,
      })
    },
  }
}

export default useDraggableShapes
