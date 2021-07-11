import { types } from 'constants.js'
import CircleDimentionsEditor from './CircleDimentionEditor'
import RectangleDimentionsEditor from './RectangleDimentionsEditor'

import styles from './ShapePropertyEditor.module.css'

function ShapePropertyEditor({ index, shape, onDelete, onChange }) {
  let ShapeDimentionsEditor = null

  switch (shape.type) {
    case types.CIRCLE:
      ShapeDimentionsEditor = CircleDimentionsEditor
      break
    case types.RECTANGLE:
      ShapeDimentionsEditor = RectangleDimentionsEditor
      break
    default:
      throw new Error('Unsupported shape in Editor')
  }

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <button type="button" className={styles.trashButton} onClick={onDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M21 6l-3 18h-12l-3-18h2.028l2.666 16h8.611l2.666-16h2.029zm-4.711-4c-.9 0-1.631-1.099-1.631-2h-5.316c0 .901-.73 2-1.631 2h-5.711v2h20v-2h-5.711z" />
          </svg>
        </button>

        <div className={styles.shapeType}>{shape.type}</div>
      </div>

      <div className={styles.group}>
        <div>center x</div>
        <div>{shape.x}</div>
      </div>

      <div className={styles.group}>
        <div>center y</div>
        <div>{shape.y}</div>
      </div>

      <ShapeDimentionsEditor
        index={index}
        shape={shape}
        onChange={onChange}
        groupClass={styles.group}
      />

      <div className={styles.group}>
        <label htmlFor={`fill-${index}`}>color</label>
        <input
          id={`fill-${index}`}
          name={`fill-${index}`}
          type="color"
          value={shape.fill}
          onChange={(e) => {
            onChange({
              ...shape,
              fill: e.target.value,
            })
          }}
        />
      </div>
    </div>
  )
}
export default ShapePropertyEditor
