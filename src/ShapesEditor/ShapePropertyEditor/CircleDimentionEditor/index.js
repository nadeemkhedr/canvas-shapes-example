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
              radius: e.target.value,
            })
          }}
        />
      </div>
    </div>
  )
}

export default CircleDimentionsEditor
