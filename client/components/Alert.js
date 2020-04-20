import React from "react"

function Alert(props) {
  const { type, message, icon } = props

  return (
    <div className={`uk-alert-${type} uk-text-center`} data-uk-alert>
      {icon && (
        <>
          <span data-uk-icon={icon}></span> <br />{" "}
        </>
      )}
      <small>{message}</small>
    </div>
  )
}

export default Alert
