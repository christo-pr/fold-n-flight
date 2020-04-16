import { Link } from "@reach/router"
import React from "react"
import AirplaneIMG from "../assets/img/airplane.png"

export default function Airplanes() {
  return (
    <div className="uk-section uk-section-muted uk-margin-large-top admin-airplanes">
      <div className="uk-container">
        <div data-uk-grid className="uk-padding">
          <Link to="/admin/airplane/1">
            <div className="uk-card uk-card-small uk-card-hover uk-card-default">
              <div className="uk-card-media-top" data-banner="easy">
                <img src={AirplaneIMG} alt="elanus" width="250" />
              </div>
              <div className="uk-card-body">Lorem ipsum dolor sit amet.</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
