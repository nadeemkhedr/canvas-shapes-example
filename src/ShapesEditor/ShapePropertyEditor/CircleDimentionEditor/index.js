function CircleDimentionsEditor({ index, shape, onChange, groupClass }) {
  return (
    <div>
      <div className={groupClass}>
        <label htmlFor={`radius-${index}`}>radius</label>
        <input
          id={`radius-${index}`}
          name={`radius-${index}`}
          type="range"
          min="10"
          max="200"
          value={shape.radius}
          onChange={(e) => {
            onChange({
              ...shape,
              radius: parseInt(e.target.value, 10),
            })
          }}
        />
      </div>
    </div>
  )
}

export default CircleDimentionsEditor
