import React from "react"

function Loading(props) {
  const { show } = props

  return (
    show && (
      <div className="overlay uk-flex uk-flex-center uk-flex-middle">
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  )
}

export default Loading
