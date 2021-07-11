function RectangleDimentionsEditor({ index, shape, onChange, groupClass }) {
  return (
    <div>
      <div className={groupClass}>
        <label htmlFor={`width-${index}`}>width</label>
        <input
          id={`width-${index}`}
          name={`width-${index}`}
          type="range"
          min="10"
          max="200"
          value={shape.width}
          onChange={(e) => {
            console.log(e.target.value)
            onChange({
              ...shape,
              width: parseInt(e.target.value, 10),
            })
          }}
        />
      </div>
      <div className={groupClass}>
        <label htmlFor={`height-${index}`}>height</label>
        <input
          id={`height-${index}`}
          name={`height-${index}`}
          type="range"
          min="10"
          max="200"
          value={shape.height}
          onChange={(e) => {
            onChange({
              ...shape,
              height: parseInt(e.target.value, 10),
            })
          }}
        />
      </div>
    </div>
  )
}

export default RectangleDimentionsEditor
