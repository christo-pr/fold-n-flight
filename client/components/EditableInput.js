import React from "react"

export default function EditableInput(props) {
  const { type, value, onChange } = props

  switch (type) {
    case "name":
    case "model":
      return (
        <>
          <input
            type="text"
            className="uk-input editable-input"
            value={value}
            onChange={(e) => onChange(type, e.target.value)}
          />
          <span data-uk-icon="icon: pencil"></span>
        </>
      )
    case "type":
      return (
        <>
          <select
            className="uk-select editable-input"
            value={value}
            onChange={(e) => onChange(type, e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </>
      )
    case "speed":
    case "glide":
    case "accuracy":
      return (
        <>
          <datalist
            id={`steps-for-${type}`}
            className="uk-flex uk-flex-between"
          >
            {Array(11)
              .fill()
              .map((_, i) => (
                <option key={i} value={i + 1}></option>
              ))}
          </datalist>
          <input
            className={`range-${type}`}
            type="range"
            value={value}
            min="1"
            max="10"
            step="1"
            list={`steps-for-${type}`}
            onChange={(e) => onChange(type, +e.target.value)}
          ></input>
        </>
      )
  }
  return null
}
