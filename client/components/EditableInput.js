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
            onChange={(e) => onChange({ [type]: e.target.value })}
          />
          <span data-uk-icon="icon: pencil"></span>
        </>
      )
    case "type":
      return (
        <>
          <select className="uk-select editable-input">
            <option>Easy</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </>
      )
    case "speed":
    case "glide":
    case "accuracy":
      return (
        <>
          <input
            className="uk-range"
            type="range"
            value={value}
            min="0"
            max="10"
            step="1"
            onChange={(e) => onChange({ [type]: e.target.value })}
          ></input>
        </>
      )
  }
  return null
}
