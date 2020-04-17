import React from "react"
import AirplaneIMG from "../assets/img/airplane.png"

export default function Airplane(props) {
  const { airplane } = props

  return (
    <div className="uk-card uk-card-small uk-card-hover uk-card-default">
      <div className="uk-card-media-top" data-banner="easy">
        <img src={AirplaneIMG} alt="elanus" width="250" />
      </div>
      <div className="uk-card-body">Lorem ipsum dolor sit amet.</div>
    </div>
  )
}
